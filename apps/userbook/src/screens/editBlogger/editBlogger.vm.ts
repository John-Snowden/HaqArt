"use client";

import { makeAutoObservable, runInAction } from "mobx";

import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";
import { Blogger, SOURCE_CATEGORY } from "@shared/prisma/prisma/client";

export type WritableBloggerInputs = Omit<
  Blogger,
  "id" | "createdAt" | "authorId"
>;

export default class EditBloggerVM implements WritableBloggerInputs {
  root: RootStore;

  name: string = "";
  link: string = "";
  subscribersCount: number = 0;
  info: string = "";
  priceSOM: number | null = null;
  priceUSD: number | null = null;
  phoneNumber: string | null = null;
  email: string | null = null;
  categories: SOURCE_CATEGORY[] = [];

  constructor(root: RootStore) {
    this.root = root;

    const { selectedBlogger } = this.root.bloggersStore;
    if (selectedBlogger) {
      this.name = selectedBlogger.name;
      this.link = selectedBlogger.link;
      this.subscribersCount = selectedBlogger.subscribersCount;
      this.info = selectedBlogger.info;
      this.priceSOM = selectedBlogger.priceSOM;
      this.priceUSD = selectedBlogger.priceUSD;
      this.phoneNumber = selectedBlogger.phoneNumber;
      this.email = selectedBlogger.email;
      this.categories = selectedBlogger.categories;
    }

    makeAutoObservable(this);
  }

  setName = (name: string) => (this.name = name);
  setLink = (link: string) => (this.link = link);
  setSubscribersCount = (count: number) => (this.subscribersCount = count);
  setInfo = (info: string) => (this.info = info);
  setPriceSOM = (price: number | null) => (this.priceSOM = price);
  setPriceUSD = (price: number | null) => (this.priceUSD = price);
  setPhoneNumber = (v: string | null) => {
    if (!v) {
      this.phoneNumber = null;
      return;
    }

    const digits = v.replace(/\D/g, ""); // remove non-numeric
    const formatted = digits
      .replace(/^(\d{2})(\d{3})(\d{2})(\d{2}).*$/, "$1 $2 $3 $4")
      .trim();

    this.phoneNumber = formatted;
  };
  setEmail = (email: string) => (this.email = email ? email : null);
  setCategories = (categories: SOURCE_CATEGORY[]) =>
    (this.categories = categories);

  updateBlogger = async () => {
    const isValid = this.validate();
    if (!isValid || !this.selectedBlogger?.id) return;
    else {
      await this.root.bloggersStore.updateBlogger({
        id: this.selectedBlogger.id,
        ...this.updatedBlogger,
      });
    }
  };

  saveBlogger = async () => {
    const isValid = this.validate();
    if (!isValid) return;
    else {
      await this.root.bloggersStore.saveBlogger({
        ...this.updatedBlogger,
        authorId: this.root.authStore.me?.id || 0,
      });
      this.resetInputs();
      this.root.routerStore.replace(ROUTES.BLOGGERS_LIST);
    }
  };

  validate = (): boolean => {
    let isValid = false;
    const alert = this.root.alertStore.toggleAlert;

    if (!this.name.trim()) {
      alert("Имя блогера не заполнено");
    } else if (!this.link.trim()) {
      alert("Ссылка не заполнена");
    } else if (!this.link.includes("https:")) {
      alert("Неправильная ссылка");
    } else if (this.subscribersCount < 0) {
      alert("Количество подписчиков не может быть отрицательным");
    } else if (this.email && !this.email.includes("@")) {
      alert("Неправильный email");
    } else if (this.categories.length === 0) {
      alert("Не указана категория");
    } else {
      isValid = true;
    }

    return isValid;
  };

  resetInputs = () => {
    runInAction(() => {
      this.name = "";
      this.link = "";
      this.subscribersCount = 0;
      this.info = "";
      this.priceSOM = null;
      this.priceUSD = null;
      this.phoneNumber = null;
      this.email = null;
      this.categories = [];
    });
  };

  get selectedBlogger(): Blogger | null {
    return this.root.bloggersStore.selectedBlogger;
  }

  get updatedBlogger() {
    return {
      name: this.name.trim(),
      link: this.link.trim(),
      subscribersCount: this.subscribersCount,
      info: this.info.trim(),
      priceSOM: this.priceSOM,
      priceUSD: this.priceUSD,
      phoneNumber: this.phoneNumber?.trim() || null,
      email: this.email?.trim() || null,
      categories: this.categories,
    };
  }

  get isUpdateMode(): boolean {
    return Boolean(this.selectedBlogger?.id);
  }

  get isUpdated(): boolean {
    const selected = this.selectedBlogger;
    if (!selected) return true;

    const entries = Object.entries(this.updatedBlogger) as [
      keyof WritableBloggerInputs,
      WritableBloggerInputs[keyof WritableBloggerInputs]
    ][];
    const difference = entries.find(([key, value]) => selected[key] !== value);

    return Boolean(difference);
  }
}
