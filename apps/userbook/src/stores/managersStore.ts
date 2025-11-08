"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { Manager } from "@shared/prisma/prisma/client";
import { checkAuthSessionExpired } from "@/cookies/cookies";
import { prismaGetManagers } from "@shared/lib/actions/manager";

import RootStore from "./rootStore";

export type PublicManagerData = Omit<Manager, "password" | "createdAt">;

export default class ManagersStore {
  root: RootStore;

  managers: PublicManagerData[] = [];

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  init = () => {
    this.getManagers();
  };

  getManagers = async () => {
    try {
      await checkAuthSessionExpired();
      const res = await prismaGetManagers();
      if ("error" in res) throw new Error();
      else runInAction(() => (this.managers = res));
    } catch (e) {
      this.root.alertStore.toggleAlert(String(e));
    }
  };
}
