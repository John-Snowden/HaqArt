"use client";

import { makeAutoObservable, runInAction } from "mobx";

import {
  prismaGetSources,
  prismaSaveSource,
  prismaDeleteSource,
  prismaUpdateSource,
} from "@shared/lib/actions/sources";
import { STORAGE_KEYS } from "@/constants/storage";
import { Manager, Source } from "@shared/prisma/prisma/client";
import { WritableSourceInputs } from "@/screens/editSource/editSource.vm";

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

  saveNewSource = async (source: WritableSourceInputs): Promise<boolean> => {
    await this.root.checkAuthSession();

    const newSource = {
      ...source,
      authorId: this.root.authStore.me?.id || Number.NaN,
    };
    if (!this.root.authStore.me?.id) {
      this.root.alertStore.toggleAlert("Author id missing");
      return false;
    }

    const res = await prismaSaveSource(JSON.parse(JSON.stringify(newSource)));
    if ("error" in res) {
      this.root.alertStore.toggleAlert(res.error);
      return false;
    }

    return true;
  };

  updateSource = async (
    source: Omit<Source, "id" | "authorId" | "createdAt">,
  ) => {
    try {
      await this.root.checkAuthSession();
      if (!this.selectedSource?.id) throw new Error("Source id missing");

      const updated = { ...source, id: this.selectedSource.id };
      const res = await prismaUpdateSource(JSON.parse(JSON.stringify(updated)));
      if ("error" in res) throw new Error(res.error);
    } catch (e) {
      this.root.alertStore.toggleAlert(String(e));
    }
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
    return (
      this.sources.find((source) => source.id === this.selectedSourceId) || null
    );
  }
}
