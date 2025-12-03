"use client";

import { makeAutoObservable, reaction, runInAction } from "mobx";

import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { Prisma } from "@shared/prisma/prisma/client";
import { PersonFull } from "@shared/lib/actions/persons";
import { CAN_EDIT_PERSON_ROLES, PersonFilters } from "@/stores/constants";

import { CallsFilterModule } from "./modules/calls";

export default class PersonsListVM {
  root: RootStore;
  isLoading: boolean = true;

  callsFilterModule: CallsFilterModule;

  personFilters: PersonFilters = {
    originId: undefined,
  };

  get include() {
    return {
      calls: {
        take: 1,
        orderBy: { createdAt: "desc" },
      },
    };
  }

  constructor(root: RootStore) {
    this.root = root;
    this.callsFilterModule = new CallsFilterModule(root);

    const { selectedOriginId } = this.root.originsStore;
    if (selectedOriginId) this.personFilters.originId = selectedOriginId;
    makeAutoObservable(this);

    reaction(
      () => [this.personFilters, this.callsFilterModule.callsFilter],
      () => this.getPersons(),
    );
  }

  setOriginFilter = (originId: number) => {
    this.personFilters = { ...this.personFilters, originId };
  };

  getPersons = async () => {
    try {
      runInAction(() => (this.isLoading = true));
      const where: Prisma.PersonWhereInput = {};

      const filterKyes = Object.keys(this.personFilters) as Array<
        keyof PersonFilters
      >;
      filterKyes.forEach((k) => {
        if (k !== undefined) where[k] = this.personFilters[k];
      });
      where.Call = this.callsFilterModule.callWhere;

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

  get personsOriginTitle(): string | undefined {
    return this.root.originsStore.selectedOrigin?.title;
  }

  get persons(): PersonFull[] {
    return this.root.personsStore.persons;
  }

  get canWrite(): boolean {
    const myRoles = this.root.authStore.me?.roles;
    const role = CAN_EDIT_PERSON_ROLES.find((r) => myRoles?.includes(r));
    return Boolean(role);
  }
}
