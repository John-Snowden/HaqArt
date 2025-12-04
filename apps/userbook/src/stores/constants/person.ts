import { translations } from "@/localize";
import { ROLE } from "@shared/prisma/prisma/client";

import { DropdownOption } from "./cases";

export type PersonCallsOptions = DropdownOption<string>;
export type PersonOriginOptions = DropdownOption<string>;

export const CAN_EDIT_PERSON_ROLES = [
  ROLE.DEV,
  ROLE.OWNER,
  ROLE.CEO,
  ROLE.SALES_MANAGER,
];

export const PERSON_CALL_OPTIONS: PersonCallsOptions[] = [
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
