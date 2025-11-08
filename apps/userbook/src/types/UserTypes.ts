import {
  TASK_IMPORTANCE,
  TASK_STATUS,
  TASK_URGENCY,
} from "@shared/prisma/prisma/client";

export type UserFilteres = {
  managerId: number | "none";
  opponentId: number | "none";
  taskStatus: TASK_STATUS | "none";
  taskUrgency: TASK_URGENCY | "none";
  taskImportance: TASK_IMPORTANCE | "none";
  leadStatus: "none";
};
