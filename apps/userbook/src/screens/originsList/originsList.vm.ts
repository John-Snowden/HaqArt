"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { capitalizeName } from "@shared/utils";
import { OriginFull } from "@shared/lib/actions/origins";
import { CAN_EDIT_ORIGIN_ROLES } from "@/stores/constants/origins";

export default class OriginsListVM {
  root;
  isLoading: boolean = true;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getOrigins = async () => {
    try {
      runInAction(() => (this.isLoading = true));
      await this.root.originsStore.getOrigins();
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  selectOrigin = (id: number) => {
    this.root.originsStore.selectedOriginId = id;
  };

  resetSelectedOrigin = () => {
    this.root.originsStore.selectedOriginId = undefined;
  };

  get origins(): OriginFull[] {
    return this.root.originsStore.origins.map((origin) => ({
      ...origin,
      author: { username: capitalizeName(origin.author.username) },
    }));
  }

  get hasOrigins(): boolean {
    return this.origins.length !== 0;
  }

  get canWrite(): boolean {
    const me = this.root.authStore.me;
    const role = CAN_EDIT_ORIGIN_ROLES.find((role) => me?.roles.includes(role));
    return Boolean(role);
  }
}
