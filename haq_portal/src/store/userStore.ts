"use client";

import { makeAutoObservable } from "mobx";

import { DraftUser } from "@/screens";
import { prismaSaveUser } from "@shared/lib/actions/users";

import RootStore from "./rootStore";
import { Manager } from "@shared/prisma/prisma/client";

export default class UserStore {
  root: RootStore;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  saveNewUser = async (data: DraftUser) => {
    if (!this.me) {
      // TODO toast
      alert("me is not defined");
      return;
    }

    // validation

    const res = await prismaSaveUser({
      ...data,
      authorId: this.me.id,
      sourceId: 1,
    });
    // TODO toast
    if ("error" in res) alert("fuck you");
    // TODO toast
    else alert("ok");
  };

  get me(): Manager | null {
    return this.root.authStore.me;
  }
}
