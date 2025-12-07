import { translations } from "@/localize";
import { CASE_CATEGORY, ROLE } from "@shared/prisma/prisma/client";

import { DropdownOption } from "./cases";

export type PersonCallsOption = DropdownOption<string>;
export type PersonOriginOptions = DropdownOption<string>;
export type PersonCategoryOption = DropdownOption<CASE_CATEGORY>;

export const CAN_EDIT_PERSON_ROLES = [
  ROLE.DEV,
  ROLE.OWNER,
  ROLE.CEO,
  ROLE.SALES_MANAGER,
];

export const PERSON_CALL_OPTIONS: PersonCallsOption[] = [
  {
    option: "withoutCalls",
    value: translations.misc.onlyWithoutCalls,
  },
  {
    option: "allMissed",
    value: translations.misc.allCallsMissed,
  },
  {
    option: "withCalls",
    value: translations.misc.onlyWithCalls,
  },
];

export const PERSON_CATEGORY_OPTIONS: PersonCategoryOption[] = Object.values(
  CASE_CATEGORY,
).map((k) => ({
  option: k,
  value: translations.categories[k],
}));
