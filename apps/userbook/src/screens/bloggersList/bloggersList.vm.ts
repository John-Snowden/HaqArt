"use client";

import { makeAutoObservable, runInAction } from "mobx";

import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";
import { Blogger } from "@shared/prisma/prisma/client";
import { STORAGE_KEYS } from "@/constants/storage";
import { PublicManagerData } from "@/stores/managersStore";

export default class BloggersListVM {
  root;

  isLoading: boolean = true;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  deleteBlogger = async (id: number) => {
    runInAction(() => (this.isLoading = true));
    await this.root.bloggersStore.deleteBlogger(id);
    runInAction(() => (this.isLoading = false));
  };

  selectBloggerId = (id: number) => {
    this.root.bloggersStore.selectedBloggerId = id;
    localStorage.setItem(STORAGE_KEYS.SELECTED_BLOGGER_ID, String(id));
    this.root.routerStore.push(ROUTES.EDIT_BLOGGER);
  };

  resetSelectedBloggerId = () =>
    this.root.bloggersStore.resetSelectedBloggerId();

  getBloggers = async () => {
    runInAction(() => (this.isLoading = true));
    try {
      await this.root.bloggersStore.getBloggers();
    } catch (e) {
      console.log(e);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  get bloggers(): Blogger[] {
    return this.root.bloggersStore.bloggers;
  }

  get hasBloggers(): boolean {
    return this.bloggers.length !== 0;
  }

  get managers(): PublicManagerData[] {
    return this.root.managersStore.managers;
  }
}
