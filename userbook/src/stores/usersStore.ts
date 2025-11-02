"use client";

import { makeAutoObservable, runInAction, toJS } from "mobx";

import {
  prismaSaveUser,
  prismaDeleteUser,
  prismaSearchUser,
  prismaUpdateUser,
  prismaGetUserById,
  prismaGetFilteredUsers,
  prismaGetUsersBySource,
} from "@shared/lib/actions/users";
import { UserFilteres } from "@/types/UserTypes";
import { STORAGE_KEYS } from "@/constants/storage";
import { User } from "@shared/prisma/prisma/client";
import { checkAuthSessionExpired } from "@/cookies/cookies";
import { WritableUserInputs } from "@/screens/editUser/editUser.vm";

import RootStore from "./rootStore";

export default class UsersStore {
  root: RootStore;

  users: User[] = [];
  selectedUserId: number | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  hydrate = () => {
    const persisted = localStorage.getItem(STORAGE_KEYS.SELECTED_USER_ID);
    this.selectedUserId = persisted ? JSON.parse(persisted) : undefined;
  };

  getFilteredUsers = async (filters: UserFilteres) => {
    try {
      await checkAuthSessionExpired();
      const res = await prismaGetFilteredUsers(toJS(filters));

      if ("error" in res) throw new Error(res.error);
      else runInAction(() => (this.users = res));
    } catch (e) {
      this.root.alertStore.toggleAlert(String(e));
    }
  };

  getUserById = async (id: number) => {
    try {
      await checkAuthSessionExpired();
      const res = await prismaGetUserById(id);
      if (!res || "error" in res) throw new Error(res?.error);
      else this.users = [res];
    } catch (e) {
      this.root.alertStore.toggleAlert(String(e));
    }
  };

  getUsersBySource = async () => {
    await this.root.checkAuthSession();
    if (!this.root.sourcesStore.selectedSourceId) return;

    const res = await prismaGetUsersBySource(
      this.root.sourcesStore.selectedSourceId,
    );
    if ("error" in res) this.root.alertStore.toggleAlert(res.error);
    else runInAction(() => (this.users = [...res]));
  };

  saveNewUser = async (user: WritableUserInputs) => {
    await this.root.checkAuthSession();

    const newUser = {
      ...user,
      authorId: this.root.authStore.me?.id || Number.NaN,
      sourceId: this.root.sourcesStore.selectedSource?.id || Number.NaN,
    };
    if (!this.root.authStore.me?.id) {
      this.root.alertStore.toggleAlert("Author id missing");
      return;
    } else if (!this.root.sourcesStore.selectedSource?.id) {
      this.root.alertStore.toggleAlert("Source id missing");
      return;
    }

    const res = await prismaSaveUser(newUser);
    if ("error" in res) this.root.alertStore.toggleAlert(res.error);
  };

  updateUser = async (user: WritableUserInputs) => {
    try {
      await checkAuthSessionExpired();
      if (!this.selectedUser?.id) throw new Error("User id missing");

      const newUser = {
        ...user,
        id: this.selectedUser.id,
      };

      const res = await prismaUpdateUser(newUser);
      if ("error" in res) throw new Error(res.error);
    } catch (e) {
      this.root.alertStore.toggleAlert(String(e));
    }
  };

  resetSelectedUserId = () => {
    this.selectedUserId = undefined;
    localStorage.removeItem(STORAGE_KEYS.SELECTED_USER_ID);
  };

  searchUsers = async (search: string): Promise<User[]> => {
    try {
      await checkAuthSessionExpired();
      const res = await prismaSearchUser(search);
      if ("error" in res) throw new Error(res.error);
      else return res;
    } catch (e) {
      this.root.alertStore.toggleAlert(String(e));
      return [];
    }
  };

  deleteUser = async (id: number) => {
    await this.root.checkAuthSession();
    const res = await prismaDeleteUser(id);
    if ("error" in res) this.root.alertStore.toggleAlert(res.error);
  };

  clear = () => (this.users = []);

  get selectedUser(): User | null {
    const candidate = this.users.find((user) => {
      return user.id === this.selectedUserId;
    });
    return candidate || null;
  }
}
