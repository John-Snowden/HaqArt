"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { PersonFull } from "@shared/lib/actions/persons";
import { CAN_EDIT_PERSON_ROLES } from "@/stores/constants";

export default class PersonsListVM {
  root: RootStore;
  isLoading: boolean = true;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getPersons = async () => {
    try {
      runInAction(() => (this.isLoading = true));
      let where = {};
      const originId = this.root.originsStore.selectedOriginId;
      if (originId) where = { originId };
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
