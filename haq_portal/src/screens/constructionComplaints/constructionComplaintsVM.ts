"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "@/store/rootStore";
import {
  LEAD_STATUS,
  LEGAL_ACTION,
  STATUS_IN_COURT,
  TASK_IMPORTANCE,
  TASK_STATUS,
  TASK_URGENCY,
  User,
} from "@shared/prisma/prisma/client";

export type WritableUserFields = Pick<
  User,
  "username" | "phoneNumber" | "problemFull" | "homeAddress"
>;

export type DraftUser = Omit<
  User,
  "id" | "createdAt" | "authorId" | "sourceId"
>;

export default class ConstructionComplaintsVM implements WritableUserFields {
  root: RootStore;

  username: string = "";
  phoneNumber: string = "";
  problemFull: string = "";
  homeAddress: string = "";

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setUsername = (v: string) => (this.username = v);
  setPhoneNumber = (v: string) => (this.phoneNumber = v);
  setProblemFull = (v: string) => (this.problemFull = v);
  setHomeAddress = (v: string) => (this.homeAddress = v);

  sendComplaint = () => {
    this.root.userStore.saveNewUser(this.updatedUser);
  };

  get problemFullCompiled(): string {
    return `${this.homeAddress}.\n${this.problemFull}`;
  }

  get updatedUser(): DraftUser {
    return {
      username: this.username.trim(),
      // TODO add TG link
      userLink: null,
      phoneNumber: this.phoneNumber.trim(),
      email: null,
      homeAddress: this.homeAddress.trim(),

      leadStatus: LEAD_STATUS.contactShared,
      taskImportance: TASK_IMPORTANCE.two,
      taskUrgency: TASK_URGENCY.three,

      problemShort: "",
      problemFull: this.problemFullCompiled.trim(),
      nearestTask: "",
      nearestTaskDeadline: null,
      taskStatus: TASK_STATUS.notAssigned,

      assignmentTime: null,

      opponentId: null,
      managerId: null,

      legalAction: LEGAL_ACTION.none,
      statusInCourt: STATUS_IN_COURT.none,
      refusalReason: null,
      timeOfPerformance: null,
      priceSOM: null,
      priceUSD: null,
      courtInfo: "",
    };
  }
}
