import {
  LEAD_STATUS,
  LEGAL_ACTION,
  REFUSAL_REASON,
  STATUS_IN_COURT,
  TASK_IMPORTANCE,
  TASK_STATUS,
  TASK_URGENCY,
} from "@shared/prisma/prisma/client";

export const leadStatusOptions: { option: LEAD_STATUS; label: string }[] = [
  { option: LEAD_STATUS.addedToDB, label: "добавлен в БД" },
  { option: LEAD_STATUS.messageSent, label: "сообщение отправлено" },
  { option: LEAD_STATUS.messageRead, label: "сообщение прочитано" },
  { option: LEAD_STATUS.replied, label: "есть диалог" },
  { option: LEAD_STATUS.contactShared, label: "получен контакт" },
];

export const taskStatusOptions: { option: TASK_STATUS; label: string }[] = [
  { option: TASK_STATUS.notAssigned, label: "нет исполнителя" },
  { option: TASK_STATUS.assignedNotStarted, label: "не начата" },
  { option: TASK_STATUS.workInProgress, label: "в работе" },
  { option: TASK_STATUS.blocked, label: "заблокирована" },
  { option: TASK_STATUS.checkMe, label: "можно проверять" },
  { option: TASK_STATUS.done, label: "выполнена" },
  { option: TASK_STATUS.weRefused, label: "мы отказались" },
  { option: TASK_STATUS.leadRefused, label: "лид отказался" },
];

export const taskImportanceOptions: {
  option: TASK_IMPORTANCE;
  label: string;
}[] = [
  { option: TASK_IMPORTANCE.one, label: "низкая" },
  { option: TASK_IMPORTANCE.two, label: "средняя" },
  { option: TASK_IMPORTANCE.three, label: "высокая" },
];

export const taskUrgencyOptions: { option: TASK_URGENCY; label: string }[] = [
  { option: TASK_URGENCY.one, label: "низкая" },
  { option: TASK_URGENCY.two, label: "не срочно" },
  { option: TASK_URGENCY.three, label: "средняя" },
  { option: TASK_URGENCY.four, label: "высокая" },
  { option: TASK_URGENCY.five, label: "срочно" },
];

export const legalActionsOptions: { option: LEGAL_ACTION; label: string }[] = [
  { option: LEGAL_ACTION.none, label: "-" },
  { option: LEGAL_ACTION.filing, label: "подача" },
  { option: LEGAL_ACTION.courtParticipation, label: "участие в суде" },
  { option: LEGAL_ACTION.consultation, label: "консультация" },
  { option: LEGAL_ACTION.appointment, label: "назначение" },
  { option: LEGAL_ACTION.negotiations, label: "переговоры" },
  { option: LEGAL_ACTION.claim, label: "претензия" },
  { option: LEGAL_ACTION.lawyerRequest, label: "запрос адвоката" },
];

export const statusInCourtOptions: {
  option: STATUS_IN_COURT;
  label: string;
}[] = [
  { option: STATUS_IN_COURT.postponed, label: "отложено" },
  { option: STATUS_IN_COURT.paused, label: "пауза" },
  { option: STATUS_IN_COURT.judgeOnVacation, label: "судья в отпуске" },
  { option: STATUS_IN_COURT.reassigned, label: "перераспределение" },
  { option: STATUS_IN_COURT.negotiations, label: "переговоры" },
  { option: STATUS_IN_COURT.returned, label: "возврат" },
];

export const refusalOptions: { option: REFUSAL_REASON; label: string }[] = [
  { option: REFUSAL_REASON.none, label: "-" },
  { option: REFUSAL_REASON.choseCompetitor, label: "конкурент" },
  { option: REFUSAL_REASON.irrelevantServices, label: "специфика" },
  { option: REFUSAL_REASON.tooExpensive, label: "цена" },
  { option: REFUSAL_REASON.noReasonGiven, label: "не известна" },
];
