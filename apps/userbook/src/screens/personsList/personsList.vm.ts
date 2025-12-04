"use client";

import { makeAutoObservable, reaction, runInAction } from "mobx";

import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { Call, Prisma } from "@shared/prisma/prisma/client";
import { PersonFull } from "@shared/lib/actions/persons";
import { CAN_EDIT_PERSON_ROLES } from "@/stores/constants";

import { CallsFilterModule } from "./modules/calls";
import { OriginFilterModule } from "./modules/origins";

export default class PersonsListVM {
  root: RootStore;
  isLoading: boolean = true;

  callsFilterModule: CallsFilterModule;
  originsFilterModule: OriginFilterModule;

  constructor(root: RootStore) {
    this.root = root;
    this.callsFilterModule = new CallsFilterModule(root);
    this.originsFilterModule = new OriginFilterModule(root);

    makeAutoObservable(this);

    reaction(
      () => [
        this.callsFilterModule.callsFilter,
        this.originsFilterModule.originIdFilter,
      ],
      () => this.getPersons(),
    );
  }

  getPersons = async () => {
    try {
      runInAction(() => (this.isLoading = true));
      const where: Prisma.PersonWhereInput = {};

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
    return this.root.personsStore.persons.slice().sort((a, b) => {
      const callA = (a.calls[0] as Call | undefined)?.createdAt || new Date();
      const callB = (b.calls[0] as Call | undefined)?.createdAt || new Date();
      return callA.getTime() - callB.getTime();
    });
  }

  get canWrite(): boolean {
    const myRoles = this.root.authStore.me?.roles;
    const role = CAN_EDIT_PERSON_ROLES.find((r) => myRoles?.includes(r));
    return Boolean(role);
  }
}
