"use client";

import { makeAutoObservable, reaction, runInAction } from "mobx";

import {
  Prisma,
  URGENCY,
  IMPORTANCE,
  CASE_STATUS,
  ROLE,
} from "@shared/prisma/prisma/client";
import { ROUTES } from "@/constants";
import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { capitalizeName } from "@shared/utils";
import { CaseFilteres, DropdownOption } from "@/stores/constants";
import { CaseFull } from "@shared/lib/actions";
import { th } from "node_modules/date-fns/locale/th.cjs";

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
      const where = this.isSearchMode ? this.searchWhere : this.activeWhere;
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

  get activeWhere(): Prisma.CaseWhereInput {
    const where: Prisma.CaseWhereInput = {
      caseStatus: {
        notIn: [
          CASE_STATUS.DONE,
          CASE_STATUS.PERSON_REFUSED,
          CASE_STATUS.WE_REFUSED,
        ],
      },
    };

    const managerId = this.root.authStore.isSuperRole
      ? undefined
      : this.root.authStore.me?.id;
    if (managerId !== undefined) where.managerId = managerId;
    return where;
  }

  get filteredCases(): CaseFull[] {
    const { cases } = this.root.casesStore;
    const filterKeys = Object.keys(this.caseFilters) as Array<
      keyof typeof this.caseFilters
    >;
    return cases.filter((c) =>
      filterKeys.every(
        (k) =>
          this.caseFilters[k] === undefined || this.caseFilters[k] === c[k],
      ),
    );
  }
}
