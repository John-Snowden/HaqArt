"use client";

import { toast } from "sonner";
import { makeAutoObservable } from "mobx";

import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";

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
    if (!this.validate()) return;

    await this.root.authStore.login({
      username: this.username,
      password: this.password,
    });
    if (this.root.authStore.me) {
      this.root.routerStore.replace(ROUTES.CASES_LIST);
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
