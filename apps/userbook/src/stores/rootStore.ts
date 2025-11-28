"use client";

import { makeAutoObservable } from "mobx";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// import { createEmployees } from "@/utils/seed";
import { ROUTES } from "@/constants/routes";

import AuthStore from "./authStore";
import AlertStore from "./alertStore";
import CasesStore from "./casesStore";
import RouterStore from "./routerStore";
import OriginsStore from "./originsStore";
import CookiesStore from "./cookiesStire";
import PersonsStore from "./personsStore";
import BloggersStore from "./bloggersStore";
import OpponentsStore from "./opponentsStore";
import EmployeesStore from "./employeesStore";

export default class RootStore {
  authStore: AuthStore;
  casesStore: CasesStore;
  alertStore: AlertStore;
  routerStore: RouterStore;
  cookieStore: CookiesStore;
  originsStore: OriginsStore;
  personsStore: PersonsStore;
  bloggersStore: BloggersStore;
  opponentsStore: OpponentsStore;
  employeesStore: EmployeesStore;

  constructor(router: AppRouterInstance) {
    this.routerStore = new RouterStore(this, router);

    this.authStore = new AuthStore(this);
    this.casesStore = new CasesStore(this);
    this.alertStore = new AlertStore(this);
    this.cookieStore = new CookiesStore(this);
    this.personsStore = new PersonsStore(this);
    this.originsStore = new OriginsStore(this);
    this.bloggersStore = new BloggersStore(this);
    this.opponentsStore = new OpponentsStore(this);
    this.employeesStore = new EmployeesStore(this);

    makeAutoObservable(this);
  }

  initApp = async () => {
    // createEmployees();
    await this.authStore.silentLogin();
    if (!this.authStore.me) {
      this.authStore.logout();
      this.routerStore.replace(ROUTES.AUTH);
    } else {
      await Promise.all([
        this.employeesStore.getEmployees(),
        this.opponentsStore.getOpponents(),
      ]);
      this.routerStore.hydrate();
      this.routerStore.replace(this.routerStore.currentRoute);
    }
  };

  clear = () => {
    this.alertStore.clear();
    this.casesStore.clear();
    this.routerStore.clear();
    this.personsStore.clear();
    this.originsStore.clear();
    this.bloggersStore.clear();
    this.opponentsStore.clear();
  };
}
