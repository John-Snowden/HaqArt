"use client";

import { makeAutoObservable, runInAction } from "mobx";

import {
  CaseFull,
  prismaGetCases,
  prismaUpsertCase,
  EditableCaseFields,
} from "@shared/lib/actions/cases";
import { Prisma } from "@shared/prisma/prisma/client";

import RootStore from "./rootStore";

export default class CasesStore {
  root: RootStore;

  cases: CaseFull[] = [];
  selectedCaseId: number | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getCases = async (where: Prisma.CaseWhereInput) => {
    const res = await prismaGetCases(where);
    runInAction(() => (this.cases = res));
  };

  upsertCase = async (data: EditableCaseFields) => {
    await prismaUpsertCase(data, this.selectedCaseId);
  };

  clear = () => {
    this.cases = [];
    this.selectedCaseId = undefined;
  };

  get selectedCase(): CaseFull | null {
    const selected = this.cases.find((c) => c.id === this.selectedCaseId);
    return selected || null;
  }
}
