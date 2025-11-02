"use client";

import { makeAutoObservable } from "mobx";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import RouterStore from "./routerStore";
import ConstructionComplaintsStore from "./constructionComplaintsStore";

export default class RootStore {
  routerStore: RouterStore;
  constructionComplaintsStore: ConstructionComplaintsStore;

  constructor(router: AppRouterInstance) {
    this.routerStore = new RouterStore(this, router);
    this.constructionComplaintsStore = new ConstructionComplaintsStore(this);
    makeAutoObservable(this);
  }
}
