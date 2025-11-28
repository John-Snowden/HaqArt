"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";
import { CAN_EDIT_OPPONENT_ROLES } from "@/stores/constants";

export default class OpponentsListVM {
  root;
  isLoading: boolean = true;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getOpponents = async () => {
    try {
      runInAction(() => (this.isLoading = true));
      await this.root.opponentsStore.getOpponents();
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  selectOpponentId = (id: number) => {
    this.root.opponentsStore.selectedOpponentId = id;
    this.root.routerStore.push(ROUTES.EDIT_OPPONENT);
  };

  resetSelectedOpponentId = () =>
    (this.root.opponentsStore.selectedOpponentId = undefined);

  get hasOpponents(): boolean {
    return this.root.opponentsStore.opponents.length !== 0;
  }

  get canWrite(): boolean {
    const myRoles = this.root.authStore.me?.roles;
    const role = CAN_EDIT_OPPONENT_ROLES.find((r) => myRoles?.includes(r));
    return Boolean(role);
  }
}
