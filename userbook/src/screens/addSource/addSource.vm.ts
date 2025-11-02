"use client";

import { makeAutoObservable, runInAction } from "mobx";

import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";
import { SOURCE_CATEGORY, Manager, Source } from "@shared/prisma/prisma/client";

export type WritableSourceInputs = Omit<
  Source,
  "id" | "createdAt" | "authorId"
>;

export default class AddSourceVM implements WritableSourceInputs {
  root: RootStore;

  title: string = "";
  sourceLink: string | null = null;
  category: SOURCE_CATEGORY = SOURCE_CATEGORY.none;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setTitle = (title: string) => (this.title = title);
  setSourceLink = (sourceLink: string) => (this.sourceLink = sourceLink);
  setCategory = (category: SOURCE_CATEGORY) => (this.category = category);

  saveSource = async () => {
    const alert = this.root.alertStore.toggleAlert;
    if (!this.me || !this.me.id) alert("Нет manager id");
    else if (!this.title) alert("Название обязательно");
    else if (Boolean(this.sourceLink && !this.sourceLink.includes("https:"))) {
      this.root.alertStore.toggleAlert("Неправильная ссылка");
    } else if (Boolean(this.category === SOURCE_CATEGORY.none))
      alert("Категория обязательна");
    else {
      await this.root.sourcesStore.saveSource(
        this.title.trim(),
        this.sourceLink?.trim() || null,
        this.category,
        this.me.id
      );

      this.resetInputs();
      this.root.routerStore.replace(ROUTES.SOURCES_LIST);
    }
  };

  resetInputs = () => {
    runInAction(() => {
      this.title = "";
      this.sourceLink = null;
    });
  };

  get me(): Manager | null {
    return this.root.authStore.me;
  }
}
