"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { ROUTES } from "@/constants";
import { STORAGE_KEYS } from "@/constants/storage";
import { deleteCookieSession } from "@/cookies/cookies";
import { Employee, ROLE } from "@shared/prisma/prisma/client";
import { EmployeeCreds, prismaLogin } from "@shared/lib/actions/auth";

import RootStore from "./rootStore";
import { SUPER_ROLES } from "./constants";
import { translations } from "@/localize";

export default class AuthStore {
  root: RootStore;

  me: Employee | null = null;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  silentLogin = async () => {
    try {
      const persistedMe = localStorage.getItem(STORAGE_KEYS.ME);
      if (persistedMe) {
        const persisted = JSON.parse(persistedMe) as Employee;
        // TODO encrypt pass
        await this.login({
          username: persisted.username,
          password: persisted.password,
        });
      }
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    }
  };

  login = async (creds: EmployeeCreds) => {
    const res = await prismaLogin(creds);
    if (!res) throw new Error("login failed");

    localStorage.setItem(STORAGE_KEYS.ME, JSON.stringify(res));
    runInAction(() => (this.me = res));
  };

  logout = async () => {
    this.me = null;
    this.root.clear();
    await deleteCookieSession();
    localStorage.removeItem(STORAGE_KEYS.ME);
    this.root.routerStore.replace(ROUTES.AUTH);
  };

  get isSuperRole(): boolean {
    const superRole = SUPER_ROLES.find((role) => {
      if (!this.me) return false;
      else return this.me.roles.includes(role);
    });
    return Boolean(superRole);
  }

  get isDev(): boolean {
    return this.me?.roles.includes(ROLE.DEV) || false;
  }
}
