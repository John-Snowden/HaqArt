"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";
import { Manager } from "@shared/prisma/prisma/client";

export default class AuthVM {
  root;
  username = "";
  password = "";

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setUsername = (username: string) => (this.username = username);
  setPassword = (password: string) => (this.password = password);

  login = async () => {
    if (!this.isCredsValid) {
      this.root.alertStore.toggleAlert("Проверьте введенные данные");
      return;
    }

    await this.root.authStore.login(this.username, this.password);
    if (this.root.authStore.me) {
      this.root.routerStore.replace(ROUTES.SOURCES_LIST);
    }
  };

  get isCredsValid(): boolean {
    return Boolean(this.username && this.password);
  }

  get me(): Manager | null {
    return this.root.authStore.me;
  }

  get isLogged(): boolean {
    return Boolean(this.me);
  }
}
