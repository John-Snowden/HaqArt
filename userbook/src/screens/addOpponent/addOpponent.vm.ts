"use client";

import { makeAutoObservable, runInAction } from "mobx";

import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";
import { Opponent } from "@shared/prisma/prisma/client";

export type WritableOpponentInputs = Omit<Opponent, "id" | "createdAt">;

export default class AddOpponentVM implements WritableOpponentInputs {
  root: RootStore;

  name: string = "";
  link: string | null = null;
  info: string = "";

  constructor(root: RootStore) {
    this.root = root;

    const { selectedOpponent } = this.root.opponentsStore;
    if (selectedOpponent) {
      this.name = selectedOpponent.name;
      this.link = selectedOpponent.link;
      this.info = selectedOpponent.info;
    }

    makeAutoObservable(this);
  }

  setName = (name: string) => (this.name = name);
  setLink = (link: string) => (this.link = link ? link : null);
  setInfo = (info: string) => (this.info = info);

  updateOpponent = async () => {
    const isValid = this.validate();
    if (!isValid || !this.selectedOpponent?.id) return;
    else {
      await this.root.opponentsStore.updateOpponent({
        id: this.selectedOpponent.id,
        ...this.updatedOpponent,
      });
    }
  };

  saveOpponent = async () => {
    const isValid = this.validate();
    if (!isValid) return;
    else {
      await this.root.opponentsStore.saveOpponent(this.updatedOpponent);
      this.resetInputs();
      this.root.routerStore.replace(ROUTES.OPPONENTS_LIST);
    }
  };

  validate = (): boolean => {
    let isValid = false;
    const alert = this.root.alertStore.toggleAlert;
    if (!this.name) alert("Название не заполнено");
    else if (this.link && !this.link.includes("https:"))
      alert("Неправильная ссылка ");
    else isValid = true;
    return isValid;
  };

  resetInputs = () => {
    runInAction(() => {
      this.name = "";
      this.link = null;
      this.info = "";
    });
  };

  get selectedOpponent(): Opponent | null {
    return this.root.opponentsStore.selectedOpponent;
  }

  get updatedOpponent() {
    return {
      name: this.name.trim(),
      link: this.link?.trim() || null,
      info: this.info.trim(),
    };
  }

  get isUpdateMode(): boolean {
    return Boolean(this.selectedOpponent?.id);
  }
}
