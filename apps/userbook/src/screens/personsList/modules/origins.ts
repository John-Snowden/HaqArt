"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "@/stores/rootStore";
import { PersonOriginOptions } from "@/stores/constants";

export class OriginFilterModule {
  root: RootStore;

  originIdFilter: number | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;

    const { selectedOriginId } = this.root.originsStore;
    if (selectedOriginId) this.originIdFilter = selectedOriginId;
    makeAutoObservable(this);
  }

  setOriginFilter = (originId: string | undefined) => {
    this.originIdFilter = originId === undefined ? undefined : Number(originId);
  };

  get personOriginOptions(): PersonOriginOptions[] {
    const origins = this.root.originsStore.origins;
    return origins.map((o) => ({
      option: String(o.id),
      value: o.title,
    }));
  }
}
