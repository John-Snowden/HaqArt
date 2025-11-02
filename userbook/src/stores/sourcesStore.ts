"use client";

import { makeAutoObservable, runInAction } from "mobx";

import {
  prismaGetSources,
  prismaSaveSource,
  prismaDeleteSource,
} from "@shared/lib/actions/sources";
import { STORAGE_KEYS } from "@/constants/storage";
import { SOURCE_CATEGORY, Manager, Source } from "@shared/prisma/prisma/client";

import RootStore from "./rootStore";

export default class SourcesStore {
  root: RootStore;

  sources: Source[] = [];
  selectedSourceId: number | undefined = undefined;

  manager: Omit<Manager, "password" | "createdAt"> | null = null;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getSources = async () => {
    try {
      await this.root.checkAuthSession();
      const res = await prismaGetSources();
      if ("error" in res) this.root.alertStore.toggleAlert(res.error);
      else runInAction(() => (this.sources = res));
    } catch (e) {
      console.log(e);
    }
  };

  saveSource = async (
    title: string,
    sourceLink: string | null,
    category: SOURCE_CATEGORY,
    authorId: number,
  ) => {
    await this.root.checkAuthSession();
    const res = await prismaSaveSource(title, sourceLink, category, authorId);
    if ("error" in res) this.root.alertStore.toggleAlert(res.error);
    else await this.root.sourcesStore.getSources();
  };

  deleteSource = async (id: number) => {
    await this.root.checkAuthSession();
    const res = await prismaDeleteSource(id);
    if ("error" in res) this.root.alertStore.toggleAlert(res.error);
    await this.root.sourcesStore.getSources();
  };

  hydrate = () => {
    const persisted = localStorage.getItem(STORAGE_KEYS.SELECTED_SOURCE_ID);
    this.selectedSourceId = persisted ? JSON.parse(persisted) : undefined;
  };

  clear = () => {
    this.sources = [];
    this.selectedSourceId = undefined;
  };

  get hasSources(): boolean {
    return this.sources.length !== 0;
  }

  get selectedSource(): Source | null {
    const candidate = this.root.sourcesStore.sources.find(
      (source) => source.id === this.root.sourcesStore.selectedSourceId,
    );

    return candidate || null;
  }
}
