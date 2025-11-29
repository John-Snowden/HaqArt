"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { Source } from "@shared/prisma/prisma/client";
import { prismaGetOriginsByAuthorId } from "@shared/lib/actions/sources";

import { toast } from "sonner";
import RootStore from "./rootStore";
import { SafeManagerData } from "./authStore";

export default class SourcesStore {
  root: RootStore;

  haq_bot_sources: Source[] = [];

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  init = async () => {
    await this.getHaqBotSources();
  };

  getHaqBotSources = async () => {
    try {
      if (!this.me) {
        toast.error(
          "Ошибка, не хватает данных. Сообщите, пожалуйста, разработчику.",
        );
        return;
      }
      const res = await prismaGetOriginsByAuthorId(this.me.id);
      if ("error" in res)
        toast.error(
          "Ошибка, необходимые данные не загружены. Сообщите, пожалуйста, разработчику.",
        );
      else runInAction(() => (this.haq_bot_sources = res));
    } catch (e) {
      console.log(e);
    }
  };

  get me(): SafeManagerData | null {
    return this.root.authStore.me;
  }
}
