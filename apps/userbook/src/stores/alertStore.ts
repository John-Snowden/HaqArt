"use client";

import { makeAutoObservable } from "mobx";

export default class AlertStore {
  isVisible = false;
  message: string | undefined = undefined;

  constructor() {
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
