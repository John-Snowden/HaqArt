"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { Manager } from "@shared/prisma/prisma/client";
import { prismaGetHaqBotEmployee } from "@shared/lib/actions/manager";

import RootStore from "./rootStore";
import { toast } from "sonner";

export type SafeManagerData = Omit<Manager, "createdAt" | "password">;

export default class AuthStore {
  root: RootStore;

  me: SafeManagerData | null = null;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  init = async () => {
    await this.getHaqBotAsManager();
  };

  getHaqBotAsManager = async () => {
    try {
      const res = await prismaGetHaqBotEmployee();
      if ("error" in res) {
        toast.error("Произошла ошибка, пожалуйста сообщите разработчику");
      } else runInAction(() => (this.me = res));
    } catch (e) {
      console.log(e);
    }
  };
}
