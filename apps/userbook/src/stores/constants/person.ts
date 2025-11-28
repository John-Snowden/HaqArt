import { ROLE } from "@shared/prisma/prisma/client";

export const CAN_EDIT_PERSON_ROLES = [
  ROLE.DEV,
  ROLE.OWNER,
  ROLE.CEO,
  ROLE.SALES_MANAGER,
];
