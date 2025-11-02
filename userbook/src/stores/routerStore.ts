"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { ROUTES } from "@/constants/routes";
import { STORAGE_KEYS } from "@/constants/storage";

import RootStore from "./rootStore";

export default class RouterStore {
  root: RootStore;

  router: AppRouterInstance;
  currentRoute: ROUTES | null = null;
  prevRoute: ROUTES | null = null;

  constructor(root: RootStore, router: AppRouterInstance) {
    this.root = root;
    this.router = router;
  }

  hydrate = () => {
    const prevRoute = localStorage.getItem(STORAGE_KEYS.CURRENT_ROUTE);
    this.currentRoute = prevRoute ? (prevRoute as ROUTES) : ROUTES.ROOT;
  };

  persistCurrentRoute = (lastRoute: ROUTES) => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_ROUTE, lastRoute);
  };

  push = (newRoute: ROUTES) => {
    this.prevRoute = this.currentRoute;
    this.currentRoute = newRoute;
    this.persistCurrentRoute(newRoute);
    this.router.push(newRoute);
  };

  back = () => {
    this.currentRoute = this.prevRoute;
    this.prevRoute = null;
    this.router.back();
  };

  replace = (newRoute: ROUTES) => {
    this.prevRoute = null;
    this.currentRoute = newRoute;
    this.persistCurrentRoute(newRoute);
    this.router.replace(newRoute);
  };

  clear = () => {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_ROUTE);
  };
}
