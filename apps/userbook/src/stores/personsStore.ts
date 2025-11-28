"use client";

import { makeAutoObservable, runInAction } from "mobx";

import {
  PersonFull,
  prismaDeletePerson,
  prismaUpsertPerson,
  EditablePersonFields,
  prismaGetPersonsByOrigin,
} from "@shared/lib/actions/persons";

import RootStore from "./rootStore";

export default class PersonsStore {
  root: RootStore;

  persons: PersonFull[] = [];
  selectedPersonId: number | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getPersonsByOrigin = async () => {
    const sourceOriginId = this.root.originsStore.selectedOriginId;
    if (!sourceOriginId) throw new Error("selected source id missing");
    const res = await prismaGetPersonsByOrigin(sourceOriginId);
    runInAction(() => (this.persons = res));
  };

  upsertPerson = async (person: EditablePersonFields) => {
    await prismaUpsertPerson(person, this.selectedPersonId);
  };

  deletePerson = async () => {
    if (!this.selectedPersonId) throw new Error("selected person id missing");
    await prismaDeletePerson(this.selectedPersonId);
    this.selectedPersonId = undefined;
  };

  clear = () => {
    this.persons = [];
    this.selectedPersonId = undefined;
  };

  get selectedPerson(): PersonFull | null {
    const person = this.persons.find((person) => {
      return person.id === this.selectedPersonId;
    });
    return person || null;
  }
}
