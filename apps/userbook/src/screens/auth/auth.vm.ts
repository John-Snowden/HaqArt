"use client";

import { toast } from "sonner";
import { makeAutoObservable } from "mobx";

import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { MAIN_ROUTE_BY_ROLE } from "@/stores/constants/router";

export default class AuthVM {
  root;

  username = "";
  password = "";

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setUsername = (username: string) => (this.username = username.trim());
  setPassword = (password: string) => (this.password = password.trim());

  login = async () => {
    try {
      if (!this.validate()) return;

      await this.root.authStore.login({
        username: this.username,
        password: this.password,
      });
      if (this.root.authStore.me) {
        const myRole = this.root.authStore.me.roles[0];
        this.root.routerStore.replace(MAIN_ROUTE_BY_ROLE[myRole]);
      }
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    }
  };

  validate = (): boolean => {
    let isValid = false;

    if (!this.username) toast.warning(translations.toastMessages.loginMissing);
    else if (!this.password) {
      toast.warning(translations.toastMessages.passwordMissing);
    } else isValid = true;

    return isValid;
  };
}
