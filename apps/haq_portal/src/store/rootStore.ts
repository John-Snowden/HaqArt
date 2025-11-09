"use client";

import { makeAutoObservable } from "mobx";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import UserStore from "./userStore";
import AuthStore from "./authStore";
import RouterStore from "./routerStore";
import SourcesStore from "./sourcesStore";
import { ROUTES } from "@/routes/routes";

export default class RootStore {
  routerStore: RouterStore;
  authStore: AuthStore;
  sourcesStore: SourcesStore;
  userStore: UserStore;

  lang: "ru" | "uz" = "uz";

  constructor(router: AppRouterInstance) {
    this.routerStore = new RouterStore(this, router);
    this.authStore = new AuthStore(this);
    this.sourcesStore = new SourcesStore(this);
    this.userStore = new UserStore(this);
    makeAutoObservable(this);
  }

  init = async () => {
    await this.authStore.init();
    await this.sourcesStore.init();
  };

  setLang = (lang: "ru" | "uz") => (this.lang = lang);
}
