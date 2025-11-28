"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { ROUTES } from "@/constants";
import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { CAN_EDIT_BLOGGER_ROLES } from "@/stores/constants/blogger";

export default class BloggersListVM {
  root;
  isLoading: boolean = true;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getBloggers = async () => {
    try {
      runInAction(() => (this.isLoading = true));
      await this.root.bloggersStore.getBloggers();
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  selectBloggerId = (id: number) => {
    this.root.bloggersStore.selectedBloggerId = id;
    this.root.routerStore.push(ROUTES.EDIT_BLOGGER);
  };

  resetSelectedBloggerId = () => {
    this.root.bloggersStore.selectedBloggerId = undefined;
  };

  get hasBloggers(): boolean {
    return this.root.bloggersStore.bloggers.length !== 0;
  }

  get canWrite(): boolean {
    const myRoles = this.root.authStore.me?.roles;
    const role = CAN_EDIT_BLOGGER_ROLES.find((r) => myRoles?.includes(r));
    return Boolean(role);
  }
}
