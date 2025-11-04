"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { Manager, Source } from "@shared/prisma/prisma/client";
import { prismaGetSourcesByAuthorId } from "@shared/lib/actions/sources";

import RootStore from "./rootStore";

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
        // TODO toast
        alert("me is not defined");
        return;
      }
      const res = await prismaGetSourcesByAuthorId(this.me.id);
      // TODO toast
      if ("error" in res) alert("fuck you");
      else runInAction(() => (this.haq_bot_sources = res));
    } catch (e) {
      console.log(e);
    }
  };

  get me(): Manager | null {
    return this.root.authStore.me;
  }
}
