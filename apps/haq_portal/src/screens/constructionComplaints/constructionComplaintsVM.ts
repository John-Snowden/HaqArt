"use client";

import { toast } from "sonner";
import { makeAutoObservable } from "mobx";

import RootStore from "@/store/rootStore";
import {
  User,
  TASK_STATUS,
  LEAD_STATUS,
  LEGAL_ACTION,
  TASK_URGENCY,
  STATUS_IN_COURT,
  TASK_IMPORTANCE,
} from "@shared/prisma/prisma/client";
import { translations } from "@/localize";

export const problemFullMaxSize = 250;

const { complaints } = translations;

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
  phoneNumber: string | null = null;
  problemFull: string = "";
  homeAddress: string = "";

  leadStatus: LEAD_STATUS = LEAD_STATUS.addedToDB;

  downPayment: bigint | null = null;
  constructionCompanyName: string = "";
  appartmentBlockName: string = "";

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setUsername = (v: string) => (this.username = v);
  setPhoneNumber = (v: string | null) => {
    if (!v) this.phoneNumber = null;
    else {
      const digits = v.replace(/\D/g, ""); // remove non-numeric
      const formatted = digits
        .replace(/^(\d{2})(\d{3})(\d{2})(\d{2}).*$/, "$1 $2 $3 $4")
        .trim();

      this.phoneNumber = formatted;
    }
    this.leadStatus = this.phoneNumber
      ? LEAD_STATUS.contactShared
      : LEAD_STATUS.addedToDB;
  };
  setProblemFull = (v: string) => {
    if (v.length > problemFullMaxSize) {
      toast.warning(complaints.problemFullCharExceeded[this.lang]);
    } else this.problemFull = v;
  };
  setHomeAddress = (v: string) => (this.homeAddress = v);
  setDownPayment = (v: string) => {
    const numeric = v.replace(/[^\d]/g, "");
    const value = BigInt(numeric);
    if (Number.isNaN(value)) return;
    this.downPayment = value;
  };
  setConstructionCompanyName = (v: string) => {
    this.constructionCompanyName = v;
  };
  setappartmentBlockName = (v: string) => (this.appartmentBlockName = v);

  sendComplaint = async () => {
    if (!this.validate()) return;

    toast.promise(() => this.root.userStore.saveNewUser(this.updatedUser), {
      loading: complaints.sending[this.lang],
      success: () => complaints.successMessage[this.lang],
      error: (e) => {
        const isPhoneNumberAlreadyRegistered = e.error?.includes(
          "Unique constraint failed on the fields: (`phoneNumber`)"
        );
        if (isPhoneNumberAlreadyRegistered) {
          // TODO if user has already been inserted into the DB by other means/sources
          // the complaint will fail
          return complaints.complaintAlreadyRegistered[this.lang];
        } else return complaints.errorContactDev[this.lang];
      },
    });
  };

  validate = (): boolean => {
    let isValid = false;
    if (!this.constructionCompanyName)
      toast.warning(complaints.constructionCompanyNameMissing[this.lang]);
    else if (!this.appartmentBlockName)
      toast.warning(complaints.appartmentBlockNameMissing[this.lang]);
    else if (!this.username) toast.warning(complaints.nameMissing[this.lang]);
    else if (!this.phoneNumber)
      toast.warning(complaints.phoneNumberMissing[this.lang]);
    else if (this.phoneNumber.replace(/\D/g, "").length !== 9)
      toast.warning(complaints.phoneNumberWrongFormat[this.lang]);
    else if (!this.homeAddress)
      toast.warning(complaints.homeAddressMissing[this.lang]);
    else if (!this.problemFull)
      toast.warning(complaints.fullProblemMissing[this.lang]);
    else if (this.problemFull.length >= problemFullMaxSize)
      toast.warning(complaints.problemFullCharExceeded[this.lang]);
    else isValid = true;
    return isValid;
  };

  get problemFullCompiled(): string {
    let result = "";
    if (this.downPayment)
      result = `Лид указал сумму первичного взноса: ${
        this.downPayment || "-"
      }\n`;
    if (this.constructionCompanyName)
      result += `Лид указал застройщика: ${
        this.constructionCompanyName || "-"
      }\n`;
    if (this.appartmentBlockName)
      result += `Лид указал название своей новостройки: ${
        this.appartmentBlockName || "-"
      }\n`;
    if (this.problemFull) result += this.problemFull;

    return result;
  }

  get updatedUser(): DraftUser {
    return {
      username: this.username.trim(),
      // TODO collect TG link
      userLink: null,
      phoneNumber: this.phoneNumber?.trim() ?? null,
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

  get formattedDownPayment(): string {
    if (this.downPayment === null) return "";
    return this.downPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); // space every 3 digits
  }

  get lang(): "ru" | "uz" {
    return this.root.lang;
  }
}
