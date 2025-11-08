"use client";

import { makeAutoObservable, runInAction } from "mobx";

import {
  prismaGetOpponents,
  prismaSaveOpponent,
  prismaUpdateOpponent,
  prismaDeleteOpponent,
} from "@shared/lib/actions/opponents";
import { STORAGE_KEYS } from "@/constants/storage";
import { Opponent } from "@shared/prisma/prisma/client";

import RootStore from "./rootStore";

export default class OpponentsStore {
  root: RootStore;

  opponents: Opponent[] = [];
  selectedOpponentId: number | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  init = async () => {
    await this.getOpponents();
  };

  getOpponents = async () => {
    try {
      await this.root.checkAuthSession();
      const res = await prismaGetOpponents();
      if ("error" in res) this.root.alertStore.toggleAlert(res.error);
      else runInAction(() => (this.opponents = res));
    } catch (e) {
      console.log(e);
    }
  };

  saveOpponent = async (opponent: {
    name: string;
    link: string | null;
    info: string;
  }) => {
    await this.root.checkAuthSession();
    const res = await prismaSaveOpponent(opponent);

    if ("error" in res) this.root.alertStore.toggleAlert(res.error);
    else await this.root.opponentsStore.getOpponents();
  };

  updateOpponent = async (opponent: {
    id: number;
    name: string;
    link: string | null;
    info: string;
  }) => {
    await this.root.checkAuthSession();
    const res = await prismaUpdateOpponent(opponent);
    if ("error" in res) this.root.alertStore.toggleAlert(res.error);
    else await this.root.opponentsStore.getOpponents();
  };

  deleteOpponent = async (id: number) => {
    await this.root.checkAuthSession();
    const res = await prismaDeleteOpponent(id);
    if ("error" in res) this.root.alertStore.toggleAlert(res.error);
    await this.root.opponentsStore.getOpponents();
  };

  hydrate = () => {
    const persisted = localStorage.getItem(STORAGE_KEYS.SELECTED_OPPONENT_ID);
    this.selectedOpponentId = persisted ? JSON.parse(persisted) : undefined;
  };

  clear = () => {
    this.opponents = [];
    this.selectedOpponentId = undefined;
  };

  resetSelectedOpponentId = () => {
    this.selectedOpponentId = undefined;
    localStorage.removeItem(STORAGE_KEYS.SELECTED_OPPONENT_ID);
  };

  get hasOpponents(): boolean {
    return this.opponents.length !== 0;
  }

  get selectedOpponent(): Opponent | null {
    const candidate = this.root.opponentsStore.opponents.find(
      (opponent) => opponent.id === this.root.opponentsStore.selectedOpponentId,
    );

    return candidate || null;
  }
}
