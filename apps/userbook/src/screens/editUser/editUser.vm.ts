"use client";

import { makeAutoObservable } from "mobx";

import {
  User,
  Opponent,
  LEAD_STATUS,
  TASK_STATUS,
  LEGAL_ACTION,
  TASK_URGENCY,
  REFUSAL_REASON,
  STATUS_IN_COURT,
  TASK_IMPORTANCE,
  ROLES,
} from "@shared/prisma/prisma/client";
import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";
import { STORAGE_KEYS } from "@/constants/storage";
import { PublicManagerData } from "@/stores/managersStore";

import { taskStatusOptions } from "./constants/dropdownOptions";
import { ownerTaskStatuses } from "@/constants/writableInputFields";

export type WritableUserInputs = Omit<
  User,
  "id" | "createdAt" | "authorId" | "sourceId"
>;

export default class EditUserVM implements WritableUserInputs {
  root: RootStore;

  username: string = "";
  userLink: string | null = null;
  phoneNumber: string | null = null;
  email: string | null = null;
  homeAddress: string = "";

  leadStatus: LEAD_STATUS = LEAD_STATUS.addedToDB;
  taskImportance: TASK_IMPORTANCE = TASK_IMPORTANCE.two;
  taskUrgency: TASK_URGENCY = TASK_URGENCY.three;

  legalAction: LEGAL_ACTION = LEGAL_ACTION.none;
  statusInCourt: STATUS_IN_COURT = STATUS_IN_COURT.none;
  refusalReason: REFUSAL_REASON | null = null;
  timeOfPerformance: Date | null = null;
  priceSOM: bigint | null = null;
  priceUSD: bigint | null = null;
  courtInfo: string = "";

  problemShort: string = "";
  problemFull: string = "";
  nearestTask: string = "";
  nearestTaskDeadline: Date | null = null;
  taskStatus: TASK_STATUS = TASK_STATUS.notAssigned;

  assignmentTime: Date | null = null;

  opponentId: number | null = null;
  managerId: number | null = null;

  searchText: string = "";

  constructor(root: RootStore) {
    this.root = root;

    const { selectedUser } = this.root.usersStore;
    if (selectedUser) {
      this.username = selectedUser.username;
      this.userLink = selectedUser.userLink;
      this.phoneNumber = selectedUser.phoneNumber;
      this.email = selectedUser.email;
      this.homeAddress = selectedUser.homeAddress;

      this.leadStatus = selectedUser.leadStatus;
      this.taskImportance = selectedUser.taskImportance;
      this.taskUrgency = selectedUser.taskUrgency;
      this.legalAction = selectedUser.legalAction;
      this.statusInCourt = selectedUser.statusInCourt;
      this.refusalReason = selectedUser.refusalReason;

      this.problemShort = selectedUser.problemShort;
      this.problemFull = selectedUser.problemFull;
      this.nearestTask = selectedUser.nearestTask;
      this.taskStatus = selectedUser.taskStatus;

      this.assignmentTime = selectedUser.assignmentTime;
      this.timeOfPerformance = selectedUser.timeOfPerformance;
      this.nearestTaskDeadline = selectedUser.nearestTaskDeadline;

      this.opponentId = selectedUser.opponentId;
      this.managerId = selectedUser.managerId;

      this.priceSOM = selectedUser.priceSOM;
      this.priceUSD = selectedUser.priceUSD;

      this.courtInfo = selectedUser.courtInfo;

      this.searchText =
        this.root.opponentsStore.opponents.find(
          (opponent) => opponent.id === selectedUser.opponentId,
        )?.name || "";
    }

    makeAutoObservable(this);
  }

  setUsername = (v: string) => (this.username = v);
  setUserLink = (v: string | null) => (this.userLink = v);
  setPhoneNumber = (v: string | null) => {
    if (!v) this.phoneNumber = null;
    else {
      const digits = v.replace(/\D/g, ""); // remove non-numeric
      const formatted = digits
        .replace(/^(\d{2})(\d{3})(\d{2})(\d{2}).*$/, "$1 $2 $3 $4")
        .trim();

      this.phoneNumber = formatted;
    }
    this.leadStatus = this.leadHasContact
      ? LEAD_STATUS.contactShared
      : LEAD_STATUS.addedToDB;
  };

  setEmail = (v: string) => {
    this.email = v ? v : null;
    this.leadStatus = this.leadHasContact
      ? LEAD_STATUS.contactShared
      : LEAD_STATUS.addedToDB;
  };

  setHomeAddress = (v: string) => (this.homeAddress = v);

  setLeadStatus = (v: LEAD_STATUS) => (this.leadStatus = v);
  setImportance = (v: TASK_IMPORTANCE) => (this.taskImportance = v);
  setTaskStatus = (v: TASK_STATUS) => {
    this.taskStatus = v;
    if (this.taskStatus !== TASK_STATUS.leadRefused && this.refusalReason)
      this.refusalReason = null;
  };
  setTaskUrgency = (v: TASK_URGENCY) => (this.taskUrgency = v);
  setLegalAction = (v: LEGAL_ACTION) => (this.legalAction = v);
  setStatusInCourt = (v: STATUS_IN_COURT) => (this.statusInCourt = v);
  setRefusalReason = (v: REFUSAL_REASON) => (this.refusalReason = v);

  setProblemShort = (v: string) => (this.problemShort = v);
  setProblemFull = (v: string) => (this.problemFull = v);
  setNearestTask = (v: string) => (this.nearestTask = v);
  setNearestTaskDeadline = (v: Date | null) => (this.nearestTaskDeadline = v);
  setCourtInfo = (v: string) => (this.courtInfo = v);

  setOpponentId = (v: number | null) => (this.opponentId = v);
  setManagerId = (v: string) => {
    const value = Number(v);
    if (Number.isNaN(value)) {
      this.managerId = null;
      this.taskStatus = TASK_STATUS.notAssigned;
      this.assignmentTime = null;
    } else {
      if (this.managerId === value) return;
      this.managerId = value;
      this.setTaskStatus(TASK_STATUS.assignedNotStarted);
      this.assignmentTime = new Date();
    }
  };
  setTimeOfPerformance = (v: Date | null) => (this.timeOfPerformance = v);
  setPriceSOM = (v: string) => {
    const numeric = v.replace(/[^\d]/g, "");
    const value = BigInt(numeric);
    if (Number.isNaN(value)) return;
    this.priceSOM = value;
  };

  setPriceUSD = (v: string) => {
    const numeric = v.replace(/[^\d]/g, "");
    const value = BigInt(numeric);
    if (Number.isNaN(value)) return;
    this.priceUSD = value;
  };

  setSearchText = (v: string) => (this.searchText = v);

  setSelectedOpponentId = (id: number) => {
    this.root.opponentsStore.selectedOpponentId = id;
    localStorage.setItem(STORAGE_KEYS.SELECTED_OPPONENT_ID, String(id));
    this.root.routerStore.push(ROUTES.ADD_OPPONENT);
  };

  updateUser = async () => {
    if (!this.validate()) return;
    await this.root.usersStore.updateUser(this.updatedUser);
  };

  saveNewUser = async () => {
    if (!this.validate()) return;
    await this.root.usersStore.saveNewUser(this.updatedUser);
    this.root.routerStore.replace(ROUTES.USERS_LIST);
  };

  deleteUser = async () => {
    if (!this.selectedUser?.id) return;
    await this.root.usersStore.deleteUser(this.selectedUser.id);
    this.root.routerStore.back();
  };

  validate = (): boolean => {
    let isValid = false;
    const alert = this.root.alertStore.toggleAlert;
    if (!this.username) alert("Имя не заполнено");
    else if (this.userLink && !this.userLink.includes("https:"))
      alert("Неправильная ссылка ");
    else if (this.email && !this.email.includes("@")) {
      alert("Неправильный email");
    } else if (this.phoneNumber) {
      const digits = this.phoneNumber.replace(/\D/g, "");
      if (digits.length !== 9)
        this.root.alertStore.toggleAlert(
          "Номер телефона должен быть из 9 цифр",
        );
      else isValid = true;
    } else isValid = true;
    return isValid;
  };

  get me(): PublicManagerData | null {
    return this.root.authStore.me;
  }

  get sourceId(): number {
    return this.root.sourcesStore.selectedSource?.id || Number.NaN;
  }

  get selectedUser(): User | null {
    return this.root.usersStore.selectedUser;
  }

  get managers(): PublicManagerData[] {
    return this.root.managersStore.managers;
  }

  get managerOptions(): { option: string; label: string }[] {
    const filtered = this.managers.filter(
      (manager) => manager.role !== ROLES.bot,
    );
    const options = filtered.map((manager) => {
      return {
        option: String(manager.id || ""),
        label: manager.username,
      };
    });

    return [
      {
        option: "none",
        label: "-",
      },
      ...options,
    ];
  }

  get updatedUser(): WritableUserInputs {
    return {
      username: this.username.trim(),
      userLink: this.userLink?.trim() ?? null,
      phoneNumber: this.phoneNumber?.trim() ?? null,
      email: this.email?.trim() || null,
      homeAddress: this.homeAddress.trim(),

      leadStatus: this.leadStatus,
      taskImportance: this.taskImportance,
      taskUrgency: this.taskUrgency,

      problemShort: this.problemShort.trim(),
      problemFull: this.problemFull.trim(),
      nearestTask: this.nearestTask.trim(),
      nearestTaskDeadline: this.nearestTaskDeadline,
      taskStatus: this.taskStatus,

      assignmentTime: this.assignmentTime,

      opponentId: this.opponentId,
      managerId: this.managerId,

      legalAction: this.legalAction,
      statusInCourt: this.statusInCourt,
      refusalReason: this.refusalReason,
      timeOfPerformance: this.timeOfPerformance,
      priceSOM: this.priceSOM,
      priceUSD: this.priceUSD,
      courtInfo: this.courtInfo.trim(),
    };
  }

  get isUpdateMode(): boolean {
    return Boolean(this.selectedUser?.id);
  }

  get isUpdated(): boolean {
    const selected = this.selectedUser;
    if (!selected) return true;

    const entries = Object.entries(this.updatedUser) as [
      keyof WritableUserInputs,
      WritableUserInputs[keyof WritableUserInputs],
    ][];
    const difference = entries.find(([key, value]) => selected[key] !== value);

    return Boolean(difference);
  }

  get searchedOpponents(): Opponent[] {
    return this.root.opponentsStore.opponents.filter((opponent) =>
      opponent.name.toLowerCase().includes(this.searchText),
    );
  }

  get leadHasContact(): boolean {
    return Boolean(this.phoneNumber || this.email);
  }

  get isSuperRole(): boolean {
    return this.root.authStore.isSuperRole;
  }

  get isOwnerRole(): boolean {
    return this.root.authStore.me?.role === "owner";
  }

  get availableStatusOptions(): {
    option: TASK_STATUS;
    label: string;
  }[] {
    let result: {
      option: TASK_STATUS;
      label: string;
    }[] = [];

    if (!this.managerId) {
      const notAssigned = taskStatusOptions.find(
        (status) => status.option === TASK_STATUS.notAssigned,
      );
      result = notAssigned ? [notAssigned] : [];
    } else {
      result = this.isOwnerRole
        ? taskStatusOptions
        : taskStatusOptions.filter(
            (status) => !ownerTaskStatuses.includes(status.option),
          );

      result = result.filter(
        (status) => status.option !== TASK_STATUS.notAssigned,
      );
    }

    return result;
  }

  get currentEditStep(): number {
    let step = 1;
    if (this.username) step = 2;
    if (this.phoneNumber || this.email) step = 3;
    if (this.problemFull || this.problemShort) step = 4;
    if (this.managerId) step = 5;
    return step;
  }

  get isDev(): boolean {
    return this.root.authStore.me?.role == ROLES.dev;
  }
}
