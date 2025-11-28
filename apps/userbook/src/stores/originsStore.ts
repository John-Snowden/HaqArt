"use client";

import { makeAutoObservable, runInAction } from "mobx";

import {
  prismaGetOrigins,
  prismaUpsertOrigin,
  EditableOriginFields,
  OriginFull,
} from "@shared/lib/actions/origins";

import RootStore from "./rootStore";

export default class OriginsStore {
  root: RootStore;

  origins: OriginFull[] = [];
  selectedOriginId: number | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getOrigins = async () => {
    const res = await prismaGetOrigins();
    runInAction(() => (this.origins = res));
  };

  upsertOrigin = async (origin: EditableOriginFields) => {
    await prismaUpsertOrigin(origin, this.selectedOriginId);
  };

  clear = () => {
    this.origins = [];
    this.selectedOriginId = undefined;
  };

  get selectedOrigin(): OriginFull | null {
    const origin = this.origins.find(
      (source) => source.id === this.selectedOriginId,
    );
    return origin || null;
  }
}
