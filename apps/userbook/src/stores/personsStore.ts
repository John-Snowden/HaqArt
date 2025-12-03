"use client";

import { makeAutoObservable, runInAction } from "mobx";

import {
  PersonFull,
  prismaGetPersons,
  prismaDeletePerson,
  prismaUpsertPerson,
  EditablePersonFields,
} from "@shared/lib/actions/persons";
import { Prisma } from "@shared/prisma/prisma/client";

import RootStore from "./rootStore";

export default class PersonsStore {
  root: RootStore;

  persons: PersonFull[] = [];
  selectedPersonId: number | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getPersons = async (where: Prisma.PersonWhereInput) => {
    const res = await prismaGetPersons(where);
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
