"use client";

import { makeAutoObservable, runInAction } from "mobx";

import {
  prismaGetOpponents,
  prismaUpsertOpponent,
  prismaDeleteOpponent,
  OpponentFull,
  EditableOpponentFields,
} from "@shared/lib/actions/opponents";

import RootStore from "./rootStore";

export default class OpponentsStore {
  root: RootStore;

  opponents: OpponentFull[] = [];
  selectedOpponentId: number | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getOpponents = async () => {
    const res = await prismaGetOpponents();
    runInAction(() => (this.opponents = res));
  };

  upsertOpponent = async (opponent: EditableOpponentFields) => {
    const toJS = JSON.parse(JSON.stringify(opponent));
    await prismaUpsertOpponent(toJS, this.selectedOpponentId);
  };

  deleteOpponent = async () => {
    if (!this.selectedOpponentId) {
      throw new Error("selected opponent id missing");
    }
    await prismaDeleteOpponent(this.selectedOpponentId);
    this.selectedOpponentId = undefined;
  };

  clear = () => {
    this.opponents = [];
    this.selectedOpponentId = undefined;
  };

  get selectedOpponent(): OpponentFull | null {
    const allOpponents = this.root.opponentsStore.opponents;
    const opponent = allOpponents.find((o) => o.id === this.selectedOpponentId);
    return opponent ?? null;
  }
}
