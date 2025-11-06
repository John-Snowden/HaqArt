"use server";

import { format } from "date-fns";
import { ru } from "date-fns/locale";

import prisma from "@shared/prisma";
import { prismaLogin } from "./auth";

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

export const prismaGetManagerById = async (managerId: number) => {
  try {
    const manager = await prisma.manager.findUnique({
      where: { id: managerId },
      select: { id: true, username: true, role: true },
    });
    if (!manager) throw new Error();
    return manager;
  } catch (e) {
    return { error: "Менеджер не получен " + e };
  }
};

export const prismaGetManagerStats = async (managerId: number) => {
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

const getLastRecordDate = async (managerId: number): Promise<Date | null> => {
  try {
    const data = await prisma.user.findFirst({
      where: { managerId },
      orderBy: { id: "desc" },
      select: { createdAt: true },
    });
    return data?.createdAt || null;
  } catch (e) {
    throw new Error("Дата последней записи не получена:/n" + e);
  }
};

const getTotalCount = async (managerId: number) => {
  try {
    return await prisma.user.count({
      where: { managerId },
    });
  } catch (e) {
    throw new Error("Количество пользователей не получено:\n" + e);
  }
};

const getUsersCountByDate = async (
  managerId: number,
  date: Date | null,
): Promise<number> => {
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

export const prismaGetHaqBotManager = async () => {
  let result;
  try {
    const username = process.env.HAQ_BOT_NAME || "";
    const password = process.env.HAQ_BOT_PASS || "";

    console.log("HAQ_BOT_NAME:", process.env.HAQ_BOT_NAME);
    console.log("HAQ_BOT_PASS:", process.env.HAQ_BOT_PASS);

    const res = await prismaLogin(username, password);
    if ("error" in res) throw new Error();
    result = await prismaGetManagerById(res.id);
  } catch (e) {
    result = { error: "Бот не получен\n" + e };
  }
  return result;
};
