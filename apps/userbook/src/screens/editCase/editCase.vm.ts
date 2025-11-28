"use client";

import { makeAutoObservable, reaction } from "mobx";

import {
  ROLE,
  URGENCY,
  IMPORTANCE,
  CASE_STATUS,
  LEGAL_ACTION,
  CASE_CATEGORY,
  REFUSAL_REASON,
  STATUS_IN_COURT,
  Opponent,
} from "@shared/prisma/prisma/client";
import {
  StatusOption,
  DropdownOption,
  CAN_EDIT_CASE_ROLES,
  MANAGER_CASE_OPTIONS,
  SUPERVISOR_CASE_OPTIONS,
} from "@/stores/constants";
import { toast } from "sonner";
import { ROUTES } from "@/constants";
import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { capitalizeName } from "@shared/utils";

export default class EditCaseVM {
  root: RootStore;

  caseUrgency: URGENCY = URGENCY.THREE;
  caseImportance: IMPORTANCE = IMPORTANCE.TWO;
  caseStatus: CASE_STATUS = CASE_STATUS.UNASSIGNED;
  categories: CASE_CATEGORY[] = [];

  legalAction: LEGAL_ACTION | undefined = undefined;
  statusInCourt: STATUS_IN_COURT | undefined = undefined;
  refusalReason: REFUSAL_REASON | undefined = undefined;

  priceSOM: bigint | undefined = undefined;
  priceUSD: bigint | undefined = undefined;

  courtInfo: string | undefined = undefined;
  problemFull: string | undefined = undefined;
  problemShort: string | undefined = undefined;
  nearestTask: string | undefined = undefined;

  assignmentTime: Date | null = null;
  timeOfPerformance: Date | null = null;
  nearestTaskDeadline: Date | null = null;

  opponentId: number | undefined = undefined;
  managerId: number | undefined = undefined;

  opponentSearchText: string = "";

  constructor(root: RootStore) {
    this.root = root;

    const { selectedCase } = this.root.casesStore;
    if (selectedCase) {
      this.caseUrgency = selectedCase.caseUrgency;
      this.caseImportance = selectedCase.caseImportance;
      this.caseStatus = selectedCase.caseStatus;

      this.legalAction = selectedCase.legalAction ?? undefined;
      this.categories = selectedCase.categories;
      this.statusInCourt = selectedCase.statusInCourt ?? undefined;
      this.refusalReason = selectedCase.refusalReason ?? undefined;

      this.priceSOM = selectedCase.priceSOM ?? undefined;
      this.priceUSD = selectedCase.priceUSD ?? undefined;

      this.courtInfo = selectedCase.courtInfo ?? undefined;
      this.problemFull = selectedCase.problemFull ?? undefined;
      this.problemShort = selectedCase.problemShort ?? undefined;
      this.nearestTask = selectedCase.nearestTask ?? undefined;

      this.assignmentTime = selectedCase.assignmentTime;
      this.timeOfPerformance = selectedCase.timeOfPerformance;
      this.nearestTaskDeadline = selectedCase.nearestTaskDeadline;

      this.opponentId = selectedCase.opponentId ?? undefined;
      this.managerId = selectedCase.managerId ?? undefined;

      this.opponentSearchText =
        this.root.opponentsStore.opponents.find(
          (opponent) => opponent.id === selectedCase.opponentId,
        )?.name || "";
    }

    makeAutoObservable(this);

    reaction(
      () => this.managerId,
      () => {
        if (this.managerId === undefined) {
          this.setCaseStatus(CASE_STATUS.UNASSIGNED);
          this.assignmentTime = null;
        } else {
          this.setCaseStatus(CASE_STATUS.PENDING_START);
          this.assignmentTime = new Date();
        }
      },
    );

    reaction(
      () => this.caseStatus,
      () => {
        if (
          this.caseStatus !== CASE_STATUS.WE_REFUSED &&
          this.caseStatus !== CASE_STATUS.PERSON_REFUSED
        ) {
          this.refusalReason = undefined;
        }
      },
    );
  }

  setCaseUrgency = (v: URGENCY) => (this.caseUrgency = v);
  setImportance = (v: IMPORTANCE) => (this.caseImportance = v);
  setCaseStatus = (v: CASE_STATUS) => (this.caseStatus = v);
  setCategories = (v: CASE_CATEGORY[]) => (this.categories = v);

  setLegalAction = (v: LEGAL_ACTION | undefined) => (this.legalAction = v);
  setStatusInCourt = (v: STATUS_IN_COURT | undefined) => {
    this.statusInCourt = v;
  };
  setRefusalReason = (v: REFUSAL_REASON | undefined) => {
    this.refusalReason = v;
  };

  setPrice = (type: "som" | "usd", v: string) => {
    const numeric = v.replace(/[^\d]/g, "");
    const value = BigInt(numeric);
    const result = Number.isNaN(value) ? undefined : value;
    if (type === "som") this.priceSOM = result;
    else this.priceUSD = result;
  };

  setCourtInfo = (v: string) => (this.courtInfo = v ? v : undefined);
  setProblemFull = (v: string) => (this.problemFull = v ? v : undefined);
  setProblemShort = (v: string) => (this.problemShort = v ? v : undefined);
  setNearestTask = (v: string) => (this.nearestTask = v ? v : undefined);

  setTimeOfPerformance = (v: Date | null) => (this.timeOfPerformance = v);
  setNearestTaskDeadline = (v: Date | null) => (this.nearestTaskDeadline = v);

  setOpponentId = (v: number | undefined) => {
    this.opponentId = v === undefined ? undefined : v;
  };
  setManagerId = (v: string | undefined) => {
    this.managerId = v === undefined ? undefined : Number(v);
  };

  setOponentSearchText = (v: string) => (this.opponentSearchText = v);
  gotoOpponent = () => {
    this.root.opponentsStore.selectedOpponentId = this.opponentId;
    this.root.routerStore.push(ROUTES.EDIT_OPPONENT);
  };

  validate = (): boolean => {
    let isValid = false;
    if (!this.problemShort) {
      toast.warning(translations.toastMessages.problemShortMissing);
    } else if (!this.opponentId) {
      toast.warning(translations.toastMessages.opponentMissing);
    } else if (this.categories.length === 0) {
      toast.warning(translations.toastMessages.categoryMissing);
    } else isValid = true;
    return isValid;
  };

  upsertCase = async () => {
    if (!this.validate()) return;
    const personId =
      this.root.personsStore.selectedPersonId ??
      this.root.casesStore.selectedCase?.personId;
    if (personId === undefined) {
      throw new Error("person id missing");
    }
    if (this.categories.length === 0) throw new Error("case category missing");
    if (this.root.authStore.me?.id === undefined)
      throw new Error("me id missing");

    try {
      await this.root.casesStore.upsertCase({
        caseUrgency: this.caseUrgency,
        caseImportance: this.caseImportance,
        caseStatus: this.caseStatus,

        legalAction: this.legalAction ?? null,
        categories: this.categories,
        statusInCourt: this.statusInCourt ?? null,
        refusalReason: this.refusalReason ?? null,

        priceSOM: this.priceSOM ?? null,
        priceUSD: this.priceUSD ?? null,

        courtInfo: this.courtInfo ?? null,
        problemFull: this.problemFull ?? null,
        problemShort: this.problemShort ?? null,
        nearestTask: this.nearestTask ?? null,

        assignmentTime: this.assignmentTime,
        timeOfPerformance: this.timeOfPerformance,
        nearestTaskDeadline: this.nearestTaskDeadline,

        opponentId: this.opponentId ?? null,
        managerId: this.managerId ?? null,
        authorId: this.authorId,
        personId: personId,
      });
      toast.success(translations.toastMessages.success);
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    }
  };

  get foundOpponents(): Opponent[] {
    const allOpponents = this.root.opponentsStore.opponents;
    return allOpponents.filter(
      (opponent) =>
        this.opponentSearchText &&
        opponent.name
          .toLowerCase()
          .includes(this.opponentSearchText.toLowerCase()),
    );
  }

  get isOwnerRole(): boolean {
    return Boolean(this.root.authStore.me?.roles.includes(ROLE.OWNER));
  }

  get permittedCaseStatuses(): StatusOption[] {
    let result: StatusOption[] = [];

    if (!this.managerId) {
      result = [
        {
          option: CASE_STATUS.UNASSIGNED,
          value: translations.caseStatuses.UNASSIGNED,
        },
      ];
    } else {
      const isIamManager = this.managerId === this.root.authStore.me?.id;
      if (isIamManager) result = [...MANAGER_CASE_OPTIONS];
      if (this.isOwnerRole) {
        result = [...MANAGER_CASE_OPTIONS, ...SUPERVISOR_CASE_OPTIONS];
      }
    }

    return result;
  }

  get managerOptions(): DropdownOption<string>[] {
    const employees = this.root.employeesStore.employees;
    const filtered = employees.filter((e) => {
      return !e.roles.includes(ROLE.BOT) && !e.roles.includes(ROLE.DEV);
    });
    return filtered.map((e) => {
      return {
        option: String(e.id),
        value: capitalizeName(e.username),
      };
    });
  }

  get canWrite(): boolean {
    const me = this.root.authStore.me;
    const role = CAN_EDIT_CASE_ROLES.find((role) => me?.roles.includes(role));
    return Boolean(role);
  }

  get isUpdateMode(): boolean {
    return Boolean(this.root.casesStore.selectedCase);
  }

  get authorId(): number {
    const selectedCaseAuthorId = this.root.casesStore.selectedCase?.author.id;
    const myId = this.root.authStore.me?.id;

    if (this.isUpdateMode) {
      if (!selectedCaseAuthorId) {
        throw new Error("selected case author id missing");
      }
      return selectedCaseAuthorId;
    } else {
      if (!myId) throw new Error("me id missing");
      return myId;
    }
  }
}
