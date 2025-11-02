"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { STORAGE_KEYS } from "@/constants/storage";
import { setCookieSession } from "@/cookies/cookies";
import { prismaLogin } from "@shared/lib/actions/auth";
import { Manager, ROLES } from "@shared/prisma/prisma/client";

import RootStore from "./rootStore";

export default class AuthStore {
  root: RootStore;

  me: Manager | null = null;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  hydrate = async () => {
    const persistedMe = localStorage.getItem(STORAGE_KEYS.ME);
    if (!persistedMe) {
      this.me = null;
      return;
    }

    // TODO encrypt pass
    const persisted = JSON.parse(persistedMe) as Manager;
    await this.login(persisted.username, persisted.password);
  };

  login = async (name: string, pass: string) => {
    try {
      const res = await prismaLogin(name, pass);
      if ("error" in res) {
        localStorage.removeItem(STORAGE_KEYS.ME);
        this.root.alertStore.toggleAlert(res.error);
        this.me = null;
        throw new Error(res.error);
      }
      await setCookieSession(res.id);
      runInAction(() => (this.me = res));
      localStorage.setItem(STORAGE_KEYS.ME, JSON.stringify(res));
    } catch (e) {
      console.log(e);
    }
  };

  clear = () => {
    localStorage.removeItem(STORAGE_KEYS.ME);
    this.me = null;
  };

  get isSuperRole(): boolean {
    return (
      this.me?.role === ROLES.dev ||
      this.me?.role === ROLES.owner ||
      this.me?.role === ROLES.ceo
    );
  }
}
