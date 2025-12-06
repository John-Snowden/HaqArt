"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "@/stores/rootStore";
import { CALL_STATUS, Prisma } from "@shared/prisma/prisma/client";

export class CallsFilterModule {
  root: RootStore;

  callsFilter: "withCalls" | "allMissed" | "withoutCalls" | undefined =
    undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setCallsFilter = (v: "withCalls" | "withoutCalls" | undefined) => {
    this.callsFilter = v;
  };

  get callWhere(): Prisma.PersonWhereInput["calls"] {
    let where: Prisma.PersonWhereInput["calls"] = {};

    if (this.callsFilter === "withCalls") {
      where = { some: { callStatus: CALL_STATUS.DONE } };
    } else if (this.callsFilter === "allMissed") {
      where = {
        some: {},
        every: { callStatus: CALL_STATUS.MISSED },
      };
    } else if (this.callsFilter === "withoutCalls") where = { none: {} };

    return where;
  }
}
