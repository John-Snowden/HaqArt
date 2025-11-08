"use client";

import { makeAutoObservable, runInAction } from "mobx";

import RootStore from "@/stores/rootStore";
import { Manager } from "@shared/prisma/prisma/client";
import { prismaGetManagerStats } from "@shared/lib/actions/manager";

import { ManagerStats } from "./types/types";

export default class ProfileVM {
  root: RootStore;

  isLoading: boolean = true;
  stats: ManagerStats | null = null;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getStats = async () => {
    runInAction(() => (this.isLoading = true));
    if (!this.me?.id) return;
    else {
      const statsRes = await prismaGetManagerStats(this.me?.id);
      if ("error" in statsRes) this.root.alertStore.toggleAlert(statsRes.error);
      else this.stats = statsRes;
    }
    runInAction(() => (this.isLoading = false));
  };

  get me(): Manager | null {
    return this.root.authStore.me;
  }

  toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");
    html.classList.toggle("dark", !isDark);
    html.classList.toggle("light", isDark);
  };
}
