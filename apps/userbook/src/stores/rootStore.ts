"use client";

import { makeAutoObservable } from "mobx";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import {
  deleteCookieSession,
  checkAuthSessionExpired,
} from "@/cookies/cookies";
import { addManager } from "@/utils/seed";
import { ROUTES } from "@/constants/routes";

import AuthStore from "./authStore";
import AlertStore from "./alertStore";
import UsersStore from "./usersStore";
import RouterStore from "./routerStore";
import SourcesStore from "./sourcesStore";
import BloggersStore from "./bloggersStore";
import ManagersStore from "./managersStore";
import OpponentsStore from "./opponentsStore";

export default class RootStore {
  routerStore: RouterStore;
  authStore: AuthStore;
  sourcesStore: SourcesStore;
  opponentsStore: OpponentsStore;
  bloggersStore: BloggersStore;
  usersStore: UsersStore;
  managersStore: ManagersStore;
  alertStore: AlertStore;

  constructor(router: AppRouterInstance) {
    this.routerStore = new RouterStore(this, router);

    this.authStore = new AuthStore(this);
    this.sourcesStore = new SourcesStore(this);
    this.opponentsStore = new OpponentsStore(this);
    this.bloggersStore = new BloggersStore(this);
    this.usersStore = new UsersStore(this);
    this.managersStore = new ManagersStore(this);
    this.alertStore = new AlertStore();

    makeAutoObservable(this);
  }

  initApp = async () => {
    this.init();
    if (!this.authStore.me) this.logout();
    else this.routerStore.replace(this.routerStore.currentRoute || ROUTES.ROOT);

    const res = await addManager({
      username: "Iroda",
      password: "!Iroda!",
      role: "manager",
    });
    if ("error" in res) this.alertStore.toggleAlert(res.error);
  };

  checkAuthSession = async () => {
    try {
      await checkAuthSessionExpired();
    } catch (e) {
      this.alertStore.toggleAlert("Session error" + e);
      this.logout();
    }
  };

  logout = async () => {
    this.clear();
    await deleteCookieSession();
    this.routerStore.replace(ROUTES.AUTH);
  };

  init = () => {
    this.routerStore.hydrate();
    this.sourcesStore.hydrate();
    this.opponentsStore.hydrate();
    this.bloggersStore.hydrate();
    this.usersStore.hydrate();
    this.authStore.hydrate();

    this.managersStore.init();
    this.opponentsStore.init();
    this.bloggersStore.init();
  };

  clear = () => {
    this.authStore.clear();
    this.sourcesStore.clear();
    this.opponentsStore.clear();
    this.bloggersStore.clear();
    this.usersStore.clear();
    this.alertStore.clear();
    this.routerStore.clear();
  };
}
