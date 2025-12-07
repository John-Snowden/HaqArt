"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "@/stores/rootStore";
import { CASE_CATEGORY, Prisma } from "@shared/prisma/prisma/client";
import { endOfDay, startOfDay } from "date-fns";

export class CasesFilterModule {
  root: RootStore;

  categoryFilter: CASE_CATEGORY | undefined = undefined;
  lastDialedFrom: Date | null = null;
  lastDialedThrough: Date | null = null;
  nextDialFrom: Date | null = null;
  nextDialThrough: Date | null = null;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setCategoryFilter = (v: CASE_CATEGORY | undefined) => {
    this.categoryFilter = v;
  };

  setLastDialedFrom = (v: Date | null) => {
    this.lastDialedFrom = v ? startOfDay(v) : v;
  };
  setLastDialedThrough = (v: Date | null) => {
    this.lastDialedThrough = v ? endOfDay(v) : v;
  };
  setNextDialFrom = (v: Date | null) => {
    this.nextDialFrom = v ? startOfDay(v) : v;
  };
  setNextDialThrough = (v: Date | null) => {
    this.nextDialThrough = v ? endOfDay(v) : v;
  };

  get caseWhere(): Prisma.PersonWhereInput["cases"] {
    return {
      some:
        this.categoryFilter ||
        this.lastDialedFrom ||
        this.lastDialedThrough ||
        this.nextDialFrom ||
        this.nextDialThrough
          ? {}
          : undefined,
      every: {
        lastDialDate: {
          gte: this.lastDialedFrom ?? undefined,
          lte: this.lastDialedThrough ?? undefined,
        },
        nextDialDate: {
          gte: this.nextDialFrom ?? undefined,
          lte: this.nextDialThrough ?? undefined,
        },
      },
    };
  }
}
