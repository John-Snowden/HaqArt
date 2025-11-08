"use client";

import { makeAutoObservable, runInAction, toJS } from "mobx";

import {
  prismaGetBloggers,
  prismaSaveBlogger,
  prismaUpdateBlogger,
  prismaDeleteBlogger,
} from "@shared/lib/actions/bloggers";
import { STORAGE_KEYS } from "@/constants/storage";
import { Blogger, SOURCE_CATEGORY } from "@shared/prisma/prisma/client";

import RootStore from "./rootStore";

export default class BloggersStore {
  root: RootStore;

  bloggers: Blogger[] = [];
  selectedBloggerId: number | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  init = async () => {
    await this.getBloggers();
  };

  getBloggers = async () => {
    try {
      await this.root.checkAuthSession();
      const res = await prismaGetBloggers();
      if ("error" in res) this.root.alertStore.toggleAlert(res.error);
      else runInAction(() => (this.bloggers = res));
    } catch (e) {
      console.log(e);
    }
  };

  saveBlogger = async (blogger: {
    name: string;
    link: string;
    subscribersCount: number;
    info: string;
    priceSOM: number | null;
    priceUSD: number | null;
    phoneNumber: string | null;
    email: string | null;
    categories: SOURCE_CATEGORY[];
    authorId: number;
  }) => {
    await this.root.checkAuthSession();
    const res = await prismaSaveBlogger(
      JSON.parse(JSON.stringify(toJS(blogger))),
    );

    if ("error" in res) this.root.alertStore.toggleAlert(res.error);
    else await this.root.bloggersStore.getBloggers();
  };

  updateBlogger = async (blogger: {
    id: number;
    name: string;
    link: string;
    subscribersCount: number;
    info: string;
    priceSOM: number | null;
    priceUSD: number | null;
    phoneNumber: string | null;
    email: string | null;
    categories: SOURCE_CATEGORY[];
  }) => {
    await this.root.checkAuthSession();
    const res = await prismaUpdateBlogger(
      JSON.parse(JSON.stringify(toJS(blogger))),
    );
    if ("error" in res) this.root.alertStore.toggleAlert(res.error);
    else await this.root.bloggersStore.getBloggers();
  };

  deleteBlogger = async (id: number) => {
    await this.root.checkAuthSession();
    const res = await prismaDeleteBlogger(id);
    if ("error" in res) this.root.alertStore.toggleAlert(res.error);
    await this.root.bloggersStore.getBloggers();
  };

  hydrate = () => {
    const persisted = localStorage.getItem(STORAGE_KEYS.SELECTED_BLOGGER_ID);
    this.selectedBloggerId = persisted ? JSON.parse(persisted) : undefined;
  };

  clear = () => {
    this.bloggers = [];
    this.selectedBloggerId = undefined;
  };

  resetSelectedBloggerId = () => {
    this.selectedBloggerId = undefined;
    localStorage.removeItem(STORAGE_KEYS.SELECTED_BLOGGER_ID);
  };

  get hasBloggers(): boolean {
    return this.bloggers.length !== 0;
  }

  get selectedBlogger(): Blogger | null {
    const candidate = this.root.bloggersStore.bloggers.find(
      (blogger) => blogger.id === this.root.bloggersStore.selectedBloggerId,
    );

    return candidate || null;
  }
}
