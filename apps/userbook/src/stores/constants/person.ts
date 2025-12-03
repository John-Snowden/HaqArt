import { translations } from "@/localize";
import { ROLE } from "@shared/prisma/prisma/client";

import { DropdownOption } from "./cases";

export type PersonCallsOptions = DropdownOption<string>;

export const CAN_EDIT_PERSON_ROLES = [
  ROLE.DEV,
  ROLE.OWNER,
  ROLE.CEO,
  ROLE.SALES_MANAGER,
];

export type PersonFilters = {
  originId: number | undefined;
};

export const PERSON_CALL_OPTIONS: PersonCallsOptions[] = [
  {
    option: "withCalls",
    value: translations.misc.onlyWith,
  },
  {
    option: "withoutCalls",
    value: translations.misc.onlyWithout,
  },
];
