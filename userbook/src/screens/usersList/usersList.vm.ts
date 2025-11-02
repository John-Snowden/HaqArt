"use client";

import { makeAutoObservable, runInAction } from "mobx";

import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";
import { Source, User } from "@shared/prisma/prisma/client";
import { STORAGE_KEYS } from "@/constants/storage";

export default class UsersListVM {
  root: RootStore;

  isLoading: boolean = true;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getUsersBySource = async () => {
    runInAction(() => (this.isLoading = true));
    await this.root.sourcesStore.getSources();
    await this.root.usersStore.getUsersBySource();
    runInAction(() => (this.isLoading = false));
  };

  resetSelectedUserId = () => this.root.usersStore.resetSelectedUserId();

  deleteUser = (id: number) => this.root.usersStore.deleteUser(id);

  selectUser = (id: number) => {
    this.root.usersStore.selectedUserId = id;
    localStorage.setItem(STORAGE_KEYS.SELECTED_USER_ID, String(id));
    this.root.routerStore.push(ROUTES.EDIT_USER);
  };

  get users(): (User & { authorName: string; managerName: string })[] {
    const data = this.root.usersStore.users.map((user) => {
      const authorName =
        this.root.managersStore.managers.find(
          (manager) => manager.id === user.authorId,
        )?.username || "-";

      const authorCapital = authorName
        ? authorName[0].toUpperCase()
        : authorName;
      const authorResult = authorName
        ? authorCapital + authorName.slice(1).toLowerCase()
        : authorCapital;

      const managerName =
        this.root.managersStore.managers.find(
          (manager) => manager.id === user.managerId,
        )?.username || "-";

      const managerCapital = managerName
        ? managerName[0].toUpperCase()
        : managerName;
      const managerResult = managerName
        ? managerCapital + managerName.slice(1).toLowerCase()
        : managerCapital;

      return { ...user, authorName: authorResult, managerName: managerResult };
    });
    return data;
  }

  get selectedSource(): Source | null {
    return this.root.sourcesStore.selectedSource;
  }
}
