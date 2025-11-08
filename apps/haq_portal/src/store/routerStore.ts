"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { ROUTES } from "@/routes/routes";

import RootStore from "./rootStore";

export default class RouterStore {
  root: RootStore;

  router: AppRouterInstance;

  constructor(root: RootStore, router: AppRouterInstance) {
    this.root = root;
    this.router = router;
  }

  push = (newRoute: ROUTES) => {
    this.router.push(newRoute);
  };

  back = () => {
    this.router.back();
  };

  replace = (newRoute: ROUTES) => {
    this.router.replace(newRoute);
  };
}
