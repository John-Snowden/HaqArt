"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "@/stores/rootStore";
import { ROLE } from "@shared/prisma/prisma/client";

export class CasesModule {
  root: RootStore;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getCasesByPerson = async () => {
    const personId = this.root.personsStore.selectedPerson?.id;
    if (!personId) throw new Error("person id missing");

    const where = { personId };
    await this.root.casesStore.getCases(where);
  };

  get isUpdateMode(): boolean {
    return Boolean(this.root.personsStore.selectedPerson);
  }

  get isShowCases(): boolean {
    const allowedRoles = [ROLE.DEV, ROLE.OWNER, ROLE.CEO, ROLE.LAWYER];
    const allowedRole = allowedRoles.find((role) =>
      this.root.authStore.me?.roles.includes(role),
    );
    return Boolean(allowedRole) && this.isUpdateMode;
  }
}
