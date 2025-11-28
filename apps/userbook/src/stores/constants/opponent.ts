import { ROLE } from "@shared/prisma/prisma/client";

export const CAN_EDIT_OPPONENT_ROLES = [
  ROLE.DEV,
  ROLE.OWNER,
  ROLE.CEO,
  ROLE.LAWYER,
];
