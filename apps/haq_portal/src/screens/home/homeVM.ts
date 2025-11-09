"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "@/store/rootStore";

export default class HomeVM {
  root: RootStore;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }
}
