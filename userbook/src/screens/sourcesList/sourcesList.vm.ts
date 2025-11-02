"use client";

import { makeAutoObservable, runInAction } from "mobx";

import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";
import { Source } from "@shared/prisma/prisma/client";
import { STORAGE_KEYS } from "@/constants/storage";

export default class SourcesListVM {
  root;

  isLoading: boolean = true;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  deleteSource = async (id: number) => {
    runInAction(() => (this.isLoading = true));
    await this.root.sourcesStore.deleteSource(id);
    runInAction(() => (this.isLoading = false));
  };

  selectSource = (id: number) => {
    this.root.sourcesStore.selectedSourceId = id;
    localStorage.setItem(STORAGE_KEYS.SELECTED_SOURCE_ID, String(id));
    this.root.routerStore.push(ROUTES.SOURCE);
  };

  getSources = async () => {
    runInAction(() => (this.isLoading = true));
    try {
      await this.root.sourcesStore.getSources();
    } catch (e) {
      console.log(e);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  get sources(): (Source & { authorName: string })[] {
    const data = this.root.sourcesStore.sources.map((source) => {
      const authorName =
        this.root.managersStore.managers.find(
          (manager) => manager.id === source.authorId,
        )?.username || "-";

      const capital = authorName ? authorName[0].toUpperCase() : authorName;
      const result = authorName
        ? capital + authorName.slice(1).toLowerCase()
        : capital;

      return { ...source, authorName: result };
    });
    return data;
  }

  get hasSources(): boolean {
    return this.sources.length !== 0;
  }
}
