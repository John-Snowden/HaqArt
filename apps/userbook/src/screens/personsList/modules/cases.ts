"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "@/stores/rootStore";
import { Prisma } from "@shared/prisma/prisma/client";
import { endOfDay, startOfDay } from "date-fns";

export class CasesFilterModule {
  root: RootStore;

  lastDialedFrom: Date | null = null;
  lastDialedThrough: Date | null = null;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setLastDialedFrom = (v: Date | null) => {
    this.lastDialedFrom = v ? startOfDay(v) : v;
  };
  setlastDialedThrough = (v: Date | null) => {
    this.lastDialedThrough = v ? endOfDay(v) : v;
  };

  get caseWhere(): Prisma.PersonWhereInput["cases"] {
    return {
      some: this.lastDialedFrom || this.lastDialedThrough ? {} : undefined,
      every: {
        lastDialDate: {
          gte: this.lastDialedFrom ?? undefined,
          lte: this.lastDialedThrough ?? undefined,
        },
      },
    };
  }
}
