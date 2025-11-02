"use client";

import { makeAutoObservable, runInAction } from "mobx";

import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";
import { Opponent } from "@shared/prisma/prisma/client";
import { STORAGE_KEYS } from "@/constants/storage";

export default class OpponentsListVM {
  root;

  isLoading: boolean = true;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  deleteOpponent = async (id: number) => {
    runInAction(() => (this.isLoading = true));
    await this.root.opponentsStore.deleteOpponent(id);
    runInAction(() => (this.isLoading = false));
  };

  selectOpponentId = (id: number) => {
    this.root.opponentsStore.selectedOpponentId = id;
    localStorage.setItem(STORAGE_KEYS.SELECTED_OPPONENT_ID, String(id));
    this.root.routerStore.push(ROUTES.ADD_OPPONENT);
  };

  resetSelectedOpponentId = () =>
    this.root.opponentsStore.resetSelectedOpponentId();

  getOpponents = async () => {
    runInAction(() => (this.isLoading = true));
    try {
      await this.root.opponentsStore.getOpponents();
    } catch (e) {
      console.log(e);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  get opponents(): Opponent[] {
    return this.root.opponentsStore.opponents;
  }

  get hasOpponents(): boolean {
    return this.opponents.length !== 0;
  }
}
