"use client";

import { makeAutoObservable, reaction, runInAction } from "mobx";

import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { Call, Prisma } from "@shared/prisma/prisma/client";
import { PersonFull } from "@shared/lib/actions/persons";
import { CAN_EDIT_PERSON_ROLES } from "@/stores/constants";

import { CasesFilterModule } from "./modules/cases";
import { CallsFilterModule } from "./modules/calls";
import { OriginFilterModule } from "./modules/origins";

export default class PersonsListVM {
  root: RootStore;
  isLoading: boolean = true;

  casesFilterModule: CasesFilterModule;
  callsFilterModule: CallsFilterModule;
  originsFilterModule: OriginFilterModule;

  constructor(root: RootStore) {
    this.root = root;
    this.casesFilterModule = new CasesFilterModule(root);
    this.callsFilterModule = new CallsFilterModule(root);
    this.originsFilterModule = new OriginFilterModule(root);

    makeAutoObservable(this);

    reaction(
      () => [
        this.callsFilterModule.callsFilter,
        this.casesFilterModule.categoryFilter,
        this.casesFilterModule.lastDialedFrom,
        this.casesFilterModule.lastDialedThrough,
        this.casesFilterModule.nextDialFrom,
        this.casesFilterModule.nextDialThrough,
        this.originsFilterModule.originIdFilter,
      ],
      () => this.getPersons(),
    );
  }

  getPersons = async () => {
    try {
      runInAction(() => (this.isLoading = true));
      const where: Prisma.PersonWhereInput = {};

      where.cases = this.casesFilterModule.caseWhere;
      where.calls = this.callsFilterModule.callWhere;
      where.originId = this.originsFilterModule.originIdFilter;

      await this.root.personsStore.getPersons(where);
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  selectPerson = (id: number) => {
    this.root.personsStore.selectedPersonId = id;
  };

  resetSelectedPersonId = () => {
    this.root.personsStore.selectedPersonId = undefined;
  };

  get persons(): PersonFull[] {
    const persons = this.root.personsStore.persons.slice();
    // TODO log
    console.log("persons", persons);

    persons.sort((a, b) => {
      const callA = (a.calls[0] as Call | undefined)?.createdAt || new Date();
      const callB = (b.calls[0] as Call | undefined)?.createdAt || new Date();
      return callA.getTime() - callB.getTime();
    });
    return persons;
  }

  get canWrite(): boolean {
    const myRoles = this.root.authStore.me?.roles;
    const role = CAN_EDIT_PERSON_ROLES.find((r) => myRoles?.includes(r));
    return Boolean(role);
  }
}
