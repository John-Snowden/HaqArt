"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "@/stores/rootStore";
import { Source } from "@shared/prisma/prisma/client";

export default class SourceVM {
  root;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  get selectedSource(): (Source & { authorName: string }) | null {
    const selectedSource = this.root.sourcesStore.selectedSource;
    if (!selectedSource) return null;
    else {
      const authorName =
        this.root.managersStore.managers.find(
          (manager) => manager.id === selectedSource.authorId,
        )?.username || "-";
      const capital = authorName ? authorName[0].toUpperCase() : authorName;
      const result = authorName
        ? capital + authorName.slice(1).toLowerCase()
        : capital;
      return { ...selectedSource, authorName: result };
    }
  }

  getSources = () => this.root.sourcesStore.getSources();
}
