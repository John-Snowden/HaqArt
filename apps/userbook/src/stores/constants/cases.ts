import {
  CASE_STATUS,
  IMPORTANCE,
  LEGAL_ACTION,
  REFUSAL_REASON,
  ROLE,
  STATUS_IN_COURT,
  URGENCY,
} from "@shared/prisma/prisma/client";
import { translations } from "@/localize";

export type DropdownOption<T> = { option: T; value: string };
export type StatusOption = DropdownOption<CASE_STATUS>;
export type RefusalOption = DropdownOption<REFUSAL_REASON>;
export type LegalActionOption = DropdownOption<LEGAL_ACTION>;
export type StatusInCourtOption = DropdownOption<STATUS_IN_COURT>;

export const MANAGER_CASE_STATUSES: CASE_STATUS[] = [
  CASE_STATUS.PENDING_START,
  CASE_STATUS.IN_PROGRESS,
  CASE_STATUS.BLOCKED,
  CASE_STATUS.PENDING_CHECK,
];

export const SUPERVISOR_CASE_STATUSES: CASE_STATUS[] = [
  CASE_STATUS.DONE,
  CASE_STATUS.WE_REFUSED,
  CASE_STATUS.PERSON_REFUSED,
];

export const MANAGER_CASE_OPTIONS: StatusOption[] = MANAGER_CASE_STATUSES.map(
  (status) => ({
    option: status,
    value: translations.caseStatuses[status],
  }),
);

export const SUPERVISOR_CASE_OPTIONS: StatusOption[] =
  SUPERVISOR_CASE_STATUSES.map((status) => ({
    option: status,
    value: translations.caseStatuses[status],
  }));

export const ALL_CASE_STATUS_OPTIONS: StatusOption[] = Object.entries(
  translations.caseStatuses,
).map(([k, v]) => ({ option: k as CASE_STATUS, value: v }));

export const REFUSAL_OPTIONS: RefusalOption[] = Object.values(
  REFUSAL_REASON,
).map((r) => ({
  option: r,
  value: translations.refusalReasons[r],
}));

export const IMPORTANCE_OPTIONS = Object.entries(translations.importance).map(
  ([option, value]) => ({ option, value }),
);

export const URGENCY_OPTIONS = Object.entries(translations.urgency).map(
  ([option, value]) => ({ option, value }),
);

export const LEGAL_ACTION_OPTIONS: LegalActionOption[] = Object.values(
  LEGAL_ACTION,
).map((a) => ({ option: a, value: translations.legalActions[a] }));

export const STATUS_IN_COURT_OPTIONS: StatusInCourtOption[] = Object.values(
  STATUS_IN_COURT,
).map((s) => ({ option: s, value: translations.statusesInCourt[s] }));

export const CAN_EDIT_CASE_ROLES = [
  ROLE.DEV,
  ROLE.OWNER,
  ROLE.CEO,
  ROLE.SALES_MANAGER,
  ROLE.LAWYER,
];

export type CaseFilteres = {
  managerId: number | undefined;
  caseStatus: CASE_STATUS | undefined;
  caseUrgency: URGENCY | undefined;
  caseImportance: IMPORTANCE | undefined;
};
