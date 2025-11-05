"use client";

import { makeAutoObservable } from "mobx";

import { DraftUser } from "@/screens";
import { prismaSaveUser } from "@shared/lib/actions/users";

import RootStore from "./rootStore";
import { SafeManagerData } from "./authStore";

export default class UserStore {
  root: RootStore;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  saveNewUser = async (data: DraftUser) => {
    const haqBotConstructionSource =
      this.root.sourcesStore.haq_bot_sources.find(
        (source) => source.title === "Haq Portal застройка",
      );

    if (!this.me) throw { message: "Закройте приложение и откройте снова." };
    else if (!haqBotConstructionSource)
      throw { message: "Ошибка. Сообщите разработчику." };

    const res = await prismaSaveUser({
      ...data,
      authorId: this.me.id,
      sourceId: haqBotConstructionSource.id,
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if ("error" in res)
      throw {
        message: "Закройте",
        error: res.error,
      };
  };

  get me(): SafeManagerData | null {
    return this.root.authStore.me;
  }
}
