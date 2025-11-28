"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "./rootStore";

export default class AlertStore {
  root: RootStore;

  isVisible = false;
  message: string | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  toggleAlert = (message?: string) => {
    this.message = message;
    this.isVisible = Boolean(message);
  };

  clear = () => {
    this.isVisible = false;
    this.message = undefined;
  };
}
