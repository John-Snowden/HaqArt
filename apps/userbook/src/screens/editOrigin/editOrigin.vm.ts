"use client";

import { toast } from "sonner";
import { makeAutoObservable } from "mobx";

import { ROUTES } from "@/constants";
import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { ROLE, CASE_CATEGORY } from "@shared/prisma/prisma/client";

const { toastMessages, alertMessages } = translations;

export default class EditOriginVM {
  root: RootStore;

  title: string | undefined = undefined;
  link: string | undefined = undefined;
  categories: CASE_CATEGORY[] = [];

  constructor(root: RootStore) {
    this.root = root;

    const { selectedOrigin } = this.root.originsStore;
    if (selectedOrigin) {
      this.title = selectedOrigin.title;
      this.link = selectedOrigin.link ?? undefined;
      this.categories = selectedOrigin.categories;
    }
    makeAutoObservable(this);
  }

  setTitle = (title: string) => (this.title = title);
  setOriginLink = (link: string) => (this.link = link);
  setCategories = (categories: CASE_CATEGORY[]) => {
    this.categories = [...categories];
  };

  upsertOrigin = async () => {
    try {
      if (!this.validate()) return;
      if (!this.title) throw new Error("origin name missing");

      await this.root.originsStore.upsertOrigin({
        title: this.title.trim(),
        link: this.link?.trim() ?? null,
        categories: this.categories,
        authorId: this.authorId,
      });

      toast.success(toastMessages.success);
      if (!this.isUpdateMode) {
        this.root.routerStore.replace(ROUTES.ORIGINS_LIST);
      }
    } catch (e) {
      this.root.alertStore.toggleAlert(alertMessages.error + e);
    }
  };

  validate = (): boolean => {
    let isValid = false;

    if (!this.title) {
      toast.warning(toastMessages.titleMissing);
    } else if (Boolean(this.link && !this.link.includes("https:"))) {
      toast.warning(toastMessages.badLink);
    } else if (this.categories.length === 0)
      toast.warning(toastMessages.categoryMissing);
    else isValid = true;

    return isValid;
  };

  get isUpdateMode(): boolean {
    return Boolean(this.root.originsStore.selectedOrigin);
  }

  get canWrite(): boolean {
    const allowedRoles = [ROLE.DEV, ROLE.ACCOUNT_MANAGER];
    const role = allowedRoles.find((role) => {
      return this.root.authStore.me?.roles.includes(role);
    });
    return Boolean(role);
  }

  get authorId(): number {
    let result;
    const selectedOrigin = this.root.originsStore.selectedOrigin;
    const me = this.root.authStore.me;

    if (this.isUpdateMode) {
      if (!selectedOrigin) throw new Error("selected origin missing");
      else result = selectedOrigin.authorId;
    } else {
      if (!me) throw new Error("me is missing");
      else result = me.id;
    }

    return result;
  }
}
