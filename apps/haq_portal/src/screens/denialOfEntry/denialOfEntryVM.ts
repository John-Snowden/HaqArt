"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "@/store/rootStore";

export default class DenialOfEntryVM {
  root;

  deniedStatus: boolean | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setDeniedStatus = (status: boolean | undefined) => {
    this.deniedStatus = status;
  };
}
