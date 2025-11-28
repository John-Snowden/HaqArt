"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { ROUTES } from "@/constants";
import { STORAGE_KEYS } from "@/constants/storage";
import { Employee, ROLE } from "@shared/prisma/prisma/client";
import { EmployeeCreds, prismaLogin } from "@shared/lib/actions/auth";
import { setCookieSession, deleteCookieSession } from "@/cookies/cookies";

import RootStore from "./rootStore";
import { SUPER_ROLES } from "./constants";

export default class AuthStore {
  root: RootStore;

  me: Employee | null = null;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  silentLogin = async () => {
    const persistedMe = localStorage.getItem(STORAGE_KEYS.ME);
    if (persistedMe) {
      const persisted = JSON.parse(persistedMe) as Employee;
      // TODO encrypt pass
      await this.login({
        username: persisted.username,
        password: persisted.password,
      });
    }
  };

  login = async (creds: EmployeeCreds) => {
    try {
      const res = await prismaLogin(creds);
      if ("error" in res) this.root.alertStore.toggleAlert(res.error);
      else {
        await setCookieSession(res.id);
        localStorage.setItem(STORAGE_KEYS.ME, JSON.stringify(res));
        runInAction(() => (this.me = res));
        this.root.initApp();
      }
    } catch (e) {
      console.log(e);
    }
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
