"use client";

import { makeAutoObservable, runInAction, toJS } from "mobx";
import {
  BloggerFull,
  prismaGetBloggers,
  prismaUpsertBlogger,
  EditableBloggerFields,
} from "@shared/lib/actions/bloggers";

import RootStore from "./rootStore";

export default class BloggersStore {
  root: RootStore;

  bloggers: BloggerFull[] = [];
  selectedBloggerId: number | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getBloggers = async () => {
    const res = await prismaGetBloggers();
    runInAction(() => (this.bloggers = res));
  };

  upsertBlogger = async (blogger: EditableBloggerFields) => {
    const tojs = toJS(blogger);
    await prismaUpsertBlogger(tojs, this.selectedBloggerId);
  };

  clear = () => {
    this.bloggers = [];
    this.selectedBloggerId = undefined;
  };

  get hasBloggers(): boolean {
    return this.bloggers.length !== 0;
  }

  get selectedBlogger(): BloggerFull | null {
    const allBloggers = this.root.bloggersStore.bloggers;
    const blogger = allBloggers.find((b) => b.id === this.selectedBloggerId);
    return blogger ?? null;
  }
}
