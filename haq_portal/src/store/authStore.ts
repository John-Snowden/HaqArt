"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { Manager } from "@shared/prisma/prisma/client";
import { prismaGetHaqBotManager } from "@shared/lib/actions/manager";

import RootStore from "./rootStore";

export default class AuthStore {
  root: RootStore;

  me: Manager | null = null;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  init = async () => {
    await this.getHaqBotAsManager();
  };

  getHaqBotAsManager = async () => {
    try {
      const res = await prismaGetHaqBotManager();
      if ("error" in res) {
        console.log("haq_bot failed to login");
        // TODO toaster
      } else runInAction(() => (this.me = res));
    } catch (e) {
      console.log(e);
    }
  };
}
