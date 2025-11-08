"use client";

import { makeAutoObservable, runInAction } from "mobx";

import {
  User,
  Manager,
  TASK_STATUS,
  TASK_URGENCY,
  TASK_IMPORTANCE,
  ROLES,
} from "@shared/prisma/prisma/client";
import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";
import { UserFilteres } from "@/types/UserTypes";
import { STORAGE_KEYS } from "@/constants/storage";

import {
  taskStatusOptions,
  taskUrgencyOptions,
  taskImportanceOptions,
} from "../editUser/constants/dropdownOptions";

export default class DeskVM {
  root: RootStore;

  isLoading: boolean = true;

  searchFilters: UserFilteres = {
    managerId: "none",
    opponentId: "none",
    taskStatus: "none",
    taskUrgency: "none",
    taskImportance: "none",
    leadStatus: "none",
  };

  searchText: string = "";
  soughtUsers: User[] = [];

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getFilteredUsers = async () => {
    runInAction(() => (this.isLoading = true));

    if (!this.me?.id) {
      this.root.alertStore.toggleAlert("My id missing");
      return;
    }

    if (!this.isSuperRole) this.searchFilters.managerId = this.me.id;
    await this.root.usersStore.getFilteredUsers(this.searchFilters);
    runInAction(() => (this.isLoading = false));
  };

  selectUser = async (id: number) => {
    runInAction(() => (this.isLoading = true));
    await this.root.usersStore.getUserById(id);
    this.root.usersStore.selectedUserId = id;
    localStorage.setItem(STORAGE_KEYS.SELECTED_USER_ID, String(id));
    this.root.routerStore.push(ROUTES.EDIT_USER);
    runInAction(() => (this.isLoading = false));
  };

  setFilterTaskUrgency = (v: TASK_URGENCY | "none") => {
    this.searchFilters.taskUrgency = v;
    this.getFilteredUsers();
  };
  setFilterTaskImportance = (v: TASK_IMPORTANCE | "none") => {
    this.searchFilters.taskImportance = v;
    this.getFilteredUsers();
  };
  setFilterManagerId = (v: string) => {
    const id = Number(v);
    this.searchFilters.managerId = Number.isNaN(id) ? "none" : id;
    this.getFilteredUsers();
  };
  setFilterOpponentId = (v: string) => {
    const value = Number(v);
    this.searchFilters.opponentId = Number.isNaN(value) ? "none" : value;
    this.getFilteredUsers();
  };
  setFilterTaskStatus = (v: TASK_STATUS | "none") => {
    this.searchFilters.taskStatus = v;
    this.getFilteredUsers();
  };

  searchUsers = async (search: string) => {
    this.searchText = search;
    if (!search) runInAction(() => (this.soughtUsers = []));
    else {
      if (search.length < 3) return;
      const res = await this.root.usersStore.searchUsers(search);
      runInAction(() => (this.soughtUsers = res));
    }
  };

  get users(): (User & {
    authorName: string;
    managerName: string;
    opponentName: string;
  })[] {
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

      const opponentName =
        this.root.opponentsStore.opponents.find(
          (opponent) => opponent.id === user.opponentId,
        )?.name || "-";

      return {
        ...user,
        authorName: authorResult,
        managerName: managerResult,
        opponentName,
      };
    });

    const order = ["one", "two", "three", "four", "five"];
    const sorted = data.sort(
      (a, b) => order.indexOf(a.taskUrgency) - order.indexOf(b.taskUrgency),
    );

    return sorted;
  }

  get unassignedUsersCount(): number {
    const unassigned = this.root.usersStore.users.filter(
      (user) => !user.managerId,
    );
    return unassigned.length;
  }

  get managerFilterOptions() {
    const filtered = this.root.managersStore.managers.filter(
      (manager) => manager.role !== ROLES.bot,
    );
    const options = filtered.map((manager) => {
      return {
        option: String(manager.id),
        label: manager.username,
      };
    });

    return [{ option: "none", label: "все" }, ...options];
  }

  get taskStatusFilterOptions() {
    return [{ option: "none", label: "все" }, ...taskStatusOptions];
  }

  get taskUrgencyFilterOptions() {
    return [{ option: "none", label: "все" }, ...taskUrgencyOptions];
  }

  get taskImportanceFilterOptions() {
    return [{ option: "none", label: "все" }, ...taskImportanceOptions];
  }

  get me(): Manager | null {
    return this.root.authStore.me;
  }

  get isSuperRole(): boolean {
    return this.root.authStore.isSuperRole;
  }

  get isShowManagerFilter(): boolean {
    return true;
  }
}
