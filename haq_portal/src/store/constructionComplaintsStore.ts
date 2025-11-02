"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "./rootStore";

export default class ConstructionComplaintsStore {
  root: RootStore;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }
}
