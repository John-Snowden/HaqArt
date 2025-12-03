import { makeAutoObservable } from "mobx";

import { checkAuthSessionExpired } from "@/cookies/cookies";

import RootStore from "./rootStore";

export default class CookiesStore {
  root: RootStore;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  checkAuthSession = async () => {
    try {
      await checkAuthSessionExpired();
    } catch (e) {
      this.root.alertStore.toggleAlert("Session error" + e);
      this.root.authStore.logout();
    }
  };
}
