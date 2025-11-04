"use client";

import { makeAutoObservable } from "mobx";

import {
  SOURCE_CATEGORY,
  Manager,
  Source,
  ROLES,
} from "@shared/prisma/prisma/client";
import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";

export type WritableSourceInputs = Omit<
  Source,
  "id" | "createdAt" | "authorId"
>;

export default class EditSourceVM implements WritableSourceInputs {
  root: RootStore;

  title: string = "";
  sourceLink: string | null = null;
  category: SOURCE_CATEGORY = SOURCE_CATEGORY.none;

  constructor(root: RootStore) {
    this.root = root;
    const { selectedSource } = this.root.sourcesStore;
    if (selectedSource) {
      this.title = selectedSource.title;
      this.sourceLink = selectedSource.sourceLink;
      this.category = selectedSource.category;
    }
    makeAutoObservable(this);
  }

  setTitle = (title: string) => (this.title = title);
  setSourceLink = (sourceLink: string) => (this.sourceLink = sourceLink);
  setCategory = (category: SOURCE_CATEGORY) => (this.category = category);

  saveSource = async () => {
    if (!this.validate()) return;
    const isSuccess = await this.root.sourcesStore.saveNewSource(
      this.sourceDraft,
    );
    if (isSuccess) this.root.routerStore.replace(ROUTES.SOURCES_LIST);
  };

  updateSource = async () => {
    if (!this.validate()) return;
    await this.root.sourcesStore.updateSource(this.sourceDraft);
  };

  validate = (): boolean => {
    let isValid = false;
    const alert = this.root.alertStore.toggleAlert;

    if (!this.me || !this.me.id) alert("Нет manager id");
    else if (!this.title) alert("Название обязательно");
    else if (Boolean(this.sourceLink && !this.sourceLink.includes("https:"))) {
      this.root.alertStore.toggleAlert("Неправильная ссылка");
    } else if (Boolean(this.category === SOURCE_CATEGORY.none))
      alert("Категория обязательна");
    else isValid = true;

    return isValid;
  };

  get sourceDraft(): WritableSourceInputs {
    return {
      // id: this.me.id,
      title: this.title.trim(),
      sourceLink: this.sourceLink?.trim() || null,
      category: this.category,
    };
  }

  get isDev(): boolean {
    return this.root.authStore.me?.role == ROLES.dev;
  }

  get me(): Manager | null {
    return this.root.authStore.me;
  }

  get selectedSource(): (Source & { authorName: string }) | null {
    const selectedSource = this.root.sourcesStore.sources.find(
      (source) => source.id === this.root.sourcesStore.selectedSourceId,
    );

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
}
