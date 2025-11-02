import { WritableUserInputs } from "@/screens/editUser/editUser.vm";
import { WritableSourceInputs } from "@/screens/addSource/addSource.vm";
import { TASK_STATUS } from "@shared/prisma/prisma/client";

// ------------------------------------------------------------User inputs
export const userStringInputs = {
  username: "Имя",
  userLink: "Ссылка",
  problemShort: "Проблема коротко",
  problemFull: "Проблема целиком...",
  homeAddress: "Домашний адрес",
  phoneNumber: "Номер телефона",
  email: "Почта",
  nearestTask: "Следующий шаг",
  assignmentTime: "Время назначения",
  authorName: "Добавил",
  courtInfo: "Суд/судья/№дела",
};

export const userNumberInputs = {
  opponentId: "Оппонент",
  managerId: "Исполнитель",
  priceSOM: "Цена, SOM",
  priceUSD: "Цена, USD",
};

export const userDateInputs = {
  nearestTaskDeadline: "Дедлайн",
  timeOfPerformance: "Срок исполнения",
};

export const userUrgencyInput = { taskUrgency: "Срочность" };
export const userImportanceInput = { taskImportance: "Важность" };
export const userStatusInput = { leadStatus: "Статус лида" };
export const userTaskStatus = { taskStatus: "Статус задачи" };
export const legalAction = { legalAction: "Механизм" };
export const statusInCourt = { statusInCourt: "Статус в суде" };
export const refusalReason = { refusalReason: "Причина отказа" };

export const userFieldLabels: Record<
  keyof WritableUserInputs | "authorName",
  string
> = {
  ...userStringInputs,
  ...userNumberInputs,
  ...userStatusInput,
  ...userUrgencyInput,
  ...userImportanceInput,
  ...userDateInputs,
  ...userTaskStatus,
  ...legalAction,
  ...legalAction,
  ...statusInCourt,
  ...refusalReason,
};

// ------------------------------------------------------------Source inputs
export const sourceFieldsLabels: Record<
  keyof WritableSourceInputs | "search" | "authorName" | "createdAt",
  string
> = {
  title: "Название",
  sourceLink: "Ссылка",
  category: "Категория",
  search: "Поиск",
  authorName: "Автор",
  createdAt: "Создано",
};

// ------------------------------------------------------------ owner task statuses
export const ownerTaskStatuses: TASK_STATUS[] = [
  TASK_STATUS.done,
  TASK_STATUS.weRefused,
  TASK_STATUS.leadRefused,
];
