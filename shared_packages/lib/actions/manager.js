"use server";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import prisma from "@shared/prisma";
export const prismaGetManagers = async () => {
  try {
    const res = await prisma.manager.findMany({
      select: {
        id: true,
        username: true,
        role: true,
      },
    });
    if (!res) throw new Error();
    else return res;
  } catch (e) {
    return { error: "Менеджеры не получены " + e };
  }
};
export const prismaGetManagerStats = async (managerId) => {
  try {
    // return await getTotalCount(managerId);
    const lastRecordDate = await getLastRecordDate(managerId);
    const [totalUsersCount, recentUsersCount] = await Promise.all([
      getTotalCount(managerId),
      getUsersCountByDate(managerId, lastRecordDate),
    ]);
    const managerStats = {
      totalUsersCount,
      lastRecordDate: lastRecordDate
        ? format(lastRecordDate, "d MMMM yyyy", { locale: ru })
        : null,
      recentUsersCount,
    };
    return managerStats;
  } catch (e) {
    return { error: "Статистика не получена:\n" + e };
  }
};
const getLastRecordDate = async (managerId) => {
  try {
    const data = await prisma.user.findFirst({
      where: { managerId },
      orderBy: { id: "desc" },
      select: { createdAt: true },
    });
    return (data === null || data === void 0 ? void 0 : data.createdAt) || null;
  } catch (e) {
    throw new Error("Дата последней записи не получена:/n" + e);
  }
};
const getTotalCount = async (managerId) => {
  try {
    return await prisma.user.count({
      where: { managerId },
    });
  } catch (e) {
    throw new Error("Количество пользователей не получено:\n" + e);
  }
};
const getUsersCountByDate = async (managerId, date) => {
  // TODO mock
  return 0;
  // try {
  //   // TODO by manager or author?
  //   throw new Error("by manager or author?");
  //   if (!date) return 0;
  //   const start = startOfDay(date);
  //   const end = endOfDay(date);
  //   const usersCountByDay = await prisma.user.count({
  //     where: { managerId, createdAt: { gte: start, lt: end } },
  //   });
  //   return usersCountByDay;
  // } catch (e) {
  //   throw new Error("Количество пользователей за дату не получено:\n" + e);
  // }
};
