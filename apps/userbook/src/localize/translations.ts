import {
  Employee,
  URGENCY,
  IMPORTANCE,
  LEAD_STATUS,
  CASE_STATUS,
  LEGAL_ACTION,
  CASE_CATEGORY,
  REFUSAL_REASON,
  STATUS_IN_COURT,
} from "@shared/prisma/prisma/client";
import {
  EditableCaseFields,
  EditableOriginFields,
  EditablePersonFields,
  EditableBloggerFields,
  EditableOpponentFields,
} from "@shared/lib/actions";

export const translations: {
  employee: Record<keyof Omit<Employee, "id" | "createdAt" | "roles">, string>;
  origin: Record<keyof EditableOriginFields, string>;
  person: Record<keyof EditablePersonFields, string>;
  opponent: Record<keyof EditableOpponentFields, string>;
  blogger: Record<keyof EditableBloggerFields, string>;
  legalCase: Record<keyof EditableCaseFields, string>;
  categories: Record<CASE_CATEGORY, string>;
  toastMessages: Record<string, string>;
  alertMessages: Record<string, string>;
  leadStatuses: Record<LEAD_STATUS, string>;
  caseStatuses: Record<CASE_STATUS, string>;
  importance: Record<IMPORTANCE, string>;
  urgency: Record<URGENCY, string>;
  legalActions: Record<LEGAL_ACTION, string>;
  statusesInCourt: Record<STATUS_IN_COURT, string>;
  refusalReasons: Record<REFUSAL_REASON, string>;
  headers: Record<string, string>;
  bttns: Record<string, string>;
  misc: Record<string, string>;
} = {
  employee: {
    username: "Имя",
    password: "Пароль",
  },
  origin: {
    title: "Название",
    link: "Ссылка",
    categories: "Категории",
    authorId: "Автор",
  },
  person: {
    name: "Имя",
    phoneNumber: "Тел",
    link: "Ссылка",
    email: "Email",
    homeAddress: "Домашний адрес",
    authorId: "Автор",
    originId: "Источник",
    leadStatus: "Статус лида",
  },
  opponent: {
    name: "Название",
    link: "Ссылка",
    info: "Доп. информация",
    authorId: "Автор",
  },
  blogger: {
    name: "Имя",
    subscribersCount: "Подписчики",
    priceSOM: "SOM",
    priceUSD: "USD",
    phoneNumber: "Контактный тел",
    email: "Email",
    categories: "Категории",
    authorId: "Автор",
    link: "Ссылка",
    info: "Доп. информация",
  },
  legalCase: {
    caseImportance: "Важность",
    caseUrgency: "Срочность",
    caseStatus: "Статус выполнения",
    problemShort: "Проблема кратко",
    problemFull: "Проблема полностью",
    nearestTask: "Ближайшее действие",
    courtInfo: "Суд / судья / № дела",
    nearestTaskDeadline: "Ближайший дедлайн",
    timeOfPerformance: "Дата исполнения",
    assignmentTime: "Дата назначения",
    refusalReason: "Причина отказа",
    legalAction: "Механизм",
    statusInCourt: "Статус в суде",
    priceSOM: "Цена, SOM",
    priceUSD: "Цена, USD",
    personId: "Клиент",
    authorId: "Автор",
    opponentId: "Оппонент",
    managerId: "Исполнитель",
    categories: "Категории",
  },
  headers: {
    allLeads: "Все лиды",
    allOpponents: "Все оппоненты",
    allBloggers: "Все блогеры",
    myCases: "Мои суды",
    opponent: "Оппонент",
    newOrigin: "Новый источник",
    newPerson: "Новый пользователь",
    newOpponent: "Новый оппонент",
    newBlogger: "Новый блогер",
  },
  categories: {
    [CASE_CATEGORY.REAL_ESTATE]: "строительство",
    [CASE_CATEGORY.FOREIGNERS]: "услуги иностранцам",
    [CASE_CATEGORY.CARS]: "автомобили",
    [CASE_CATEGORY.LOANS]: "кредиты",
    [CASE_CATEGORY.OTHER]: "другое",
  },
  bttns: {
    open: "Открыть",
    add: "Добавить",
    save: "Сохранить",
    back: "Назад",
    logout: "Выход",
    delete: "Удалить",
    addCase: "Добавить дело",
    viewPersons: "Список лидов",
    addOrigin: "Добавить источник",
    addOpponent: "Добавить оппонента",
    addBlogger: "Добавить блогера",
    addPerson: "Добавить пользователя",
  },
  misc: {
    createdAt: "Создано",
    search: "Поиск",
    case: "Дело",
    newCase: "Новое дело",
    asOf: "от",
    noRecords: "Нет записей",
    tel: "Номер телефона +(998)",
    info: "Доп. информация",
    price: "Цена",
    all: "все",
    noManager: "Без исполнителя",
    byNameOrLink: "по имени или ссылке",
  },
  toastMessages: {
    success: "Выполнено",
    idMissing: "Нет id, сообщите разработчику",
    nameMissing: "Имя не заполнено",
    subscribersCountMissing: "Не указаны подписчики",
    phoneNumberNotNineDigits: "Номер телефона должен быть из 9 цифр",
    titleMissing: "Название обязательно",
    linkMissing: "Ссылка не заполнена",
    problemShortMissing: "Нет краткого описания",
    badLink: "Неправильная ссылка",
    badEmail: "Неправильный email",
    categoryMissing: "Не указана категория",
    opponentMissing: "Оппонент не указан",
    loginMissing: "Не заполнен логин",
    passwordMissing: "Не заполнен пароль",
  },
  alertMessages: {
    error: "Ошибка. ",
  },
  leadStatuses: {
    [LEAD_STATUS.ADDED_TO_DB]: "добавлен в БД",
    [LEAD_STATUS.CONTACT_SHARED]: "получен контакт",
    [LEAD_STATUS.CLIENT]: "клиент",
    [LEAD_STATUS.RETURNING_CLIENT]: "повторный клиент",
  },
  caseStatuses: {
    [CASE_STATUS.UNASSIGNED]: "исполнитель не назначен",
    [CASE_STATUS.PENDING_START]: "не начата",
    [CASE_STATUS.IN_PROGRESS]: "в работе",
    [CASE_STATUS.BLOCKED]: "заблокирована",
    [CASE_STATUS.PENDING_CHECK]: "ждет проверки",
    [CASE_STATUS.DONE]: "выполнена",
    [CASE_STATUS.PERSON_REFUSED]: "клиент отказался",
    [CASE_STATUS.WE_REFUSED]: "мы отказались",
  },
  importance: {
    [IMPORTANCE.ONE]: "низкая",
    [IMPORTANCE.TWO]: "средняя",
    [IMPORTANCE.THREE]: "высокая",
  },
  urgency: {
    [URGENCY.ONE]: "низкая",
    [URGENCY.TWO]: "не срочно",
    [URGENCY.THREE]: "средняя",
    [URGENCY.FOUR]: "высокая",
    [URGENCY.FIVE]: "срочно",
  },
  legalActions: {
    [LEGAL_ACTION.FILING]: "подача",
    [LEGAL_ACTION.COURT_PARTICIPATION]: "участие в суде",
    [LEGAL_ACTION.CONSULTATION]: "консультация",
    [LEGAL_ACTION.APPOINTMENT]: "назначение",
    [LEGAL_ACTION.NEGOTIATIONS]: "переговоры",
    [LEGAL_ACTION.CLAIM]: "претензия",
    [LEGAL_ACTION.LAWYER_REQUEST]: "запрос адвоката",
  },
  statusesInCourt: {
    [STATUS_IN_COURT.POSTPONED]: "отложено",
    [STATUS_IN_COURT.PAUSED]: "пауза",
    [STATUS_IN_COURT.JUDGE_ON_VACATION]: "судья в отпуске",
    [STATUS_IN_COURT.REASSIGNED]: "перераспределение",
    [STATUS_IN_COURT.NEGOTIATIONS]: "переговоры",
    [STATUS_IN_COURT.RETURNED]: "возврат",
  },
  refusalReasons: {
    [REFUSAL_REASON.CHOSE_COMPETITOR]: "конкурент",
    [REFUSAL_REASON.IRRELEVANT_SERVICES]: "специфика",
    [REFUSAL_REASON.TOO_EXPENSIVE]: "цена",
  },
};
