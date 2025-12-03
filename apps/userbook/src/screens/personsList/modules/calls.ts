"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "@/stores/rootStore";
import { Prisma } from "@shared/prisma/prisma/client";

export class CallsFilterModule {
  root: RootStore;

  callsFilter: "withCalls" | "withoutCalls" | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setCallsFilter = (v: "withCalls" | "withoutCalls" | undefined) => {
    this.callsFilter = v;
  };

  get callWhere(): Prisma.PersonWhereInput["Call"] {
    if (this.callsFilter === "withCalls") return { some: {} };
    else if (this.callsFilter === "withoutCalls") return { none: {} };
    else return undefined;
  }
}
