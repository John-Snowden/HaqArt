"use client";

import { makeAutoObservable, reaction, runInAction } from "mobx";

import {
  ROLE,
  Prisma,
  URGENCY,
  IMPORTANCE,
  CASE_STATUS,
} from "@shared/prisma/prisma/client";
import { ROUTES } from "@/constants";
import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { CaseFull } from "@shared/lib/actions";
import { capitalizeName } from "@shared/utils";
import { CaseFilteres, DropdownOption } from "@/stores/constants";

export default class CasesListVM {
  root: RootStore;
  isLoading: boolean = true;

  searchText: string = "";
  caseFilters: CaseFilteres = {
    managerId: undefined,
    caseStatus: undefined,
    caseUrgency: undefined,
    caseImportance: undefined,
  };

  constructor(root: RootStore) {
    this.root = root;

    makeAutoObservable(this);

    reaction(
      () => this.caseFilters,
      () => this.getCases(),
    );

    reaction(
      () => this.searchText,
      () => {
        if (this.searchText.length >= 3) this.getCases();
        else if (this.searchText.length === 0) this.getCases();
      },
    );
  }

  getCases = async () => {
    try {
      runInAction(() => (this.isLoading = true));
      const where = this.isSearchMode ? this.searchWhere : this.filteredWhere;
      await this.root.casesStore.getCases(where);
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  setSearchText = (v: string) => (this.searchText = v);

  selectCase = async (id: number) => {
    this.root.casesStore.selectedCaseId = id;
    this.root.routerStore.push(ROUTES.EDIT_CASE);
  };

  setFilterCaseUrgency = (v: URGENCY | undefined) => {
    this.caseFilters = { ...this.caseFilters, caseUrgency: v };
  };
  setFilterCaseImportance = (v: IMPORTANCE | undefined) => {
    this.caseFilters = { ...this.caseFilters, caseImportance: v };
  };
  setFilterManagerId = (v: string | undefined) => {
    this.caseFilters = {
      ...this.caseFilters,
      managerId: v === undefined ? undefined : Number(v),
    };
  };
  setFilterCaseStatus = (v: CASE_STATUS | undefined) => {
    this.caseFilters = { ...this.caseFilters, caseStatus: v };
  };

  get unassignedCasesCount(): number {
    const { cases } = this.root.casesStore;
    const unassignedCases = cases.filter((c) => c.managerId === null);
    return unassignedCases.length;
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

  get isSearchMode(): boolean {
    return this.searchText.length >= 3;
  }

  get searchWhere(): Prisma.CaseWhereInput {
    const search = { contains: this.searchText, mode: "insensitive" } as const;
    return {
      OR: [
        { person: { is: { name: search } } },
        { person: { is: { link: search } } },
      ],
    };
  }

  get filteredWhere(): Prisma.CaseWhereInput {
    const where: Prisma.CaseWhereInput = {
      caseStatus: {
        notIn: [
          CASE_STATUS.DONE,
          CASE_STATUS.PERSON_REFUSED,
          CASE_STATUS.WE_REFUSED,
        ],
      },
    };

    const filters = Object.keys(this.caseFilters) as Array<keyof CaseFilteres>;
    filters.forEach((f) => {
      if (this.caseFilters[f] !== undefined) where[f] = this.caseFilters[f];
    });

    if (!this.root.authStore.isSuperRole) {
      const myId = this.root.authStore.me?.id;
      if (!myId) throw new Error("me id missing");
      where.managerId = myId;
    }
    return where;
  }

  get sortedCases(): CaseFull[] {
    const order = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };
    return this.root.casesStore.cases
      .slice()
      .sort((a, b) => order[a.caseUrgency] - order[b.caseUrgency]);
  }
}
