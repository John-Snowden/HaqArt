"use server";

import { format } from "date-fns";
import { ru } from "date-fns/locale";

import prisma from "@shared/prisma";

import { prismaLogin } from "./auth";
import { HAQ_BOT_NAME, HAQ_BOT_PASS } from "../loadEnv";

export const prismaGetEmployees = async () => {
  const res = await prisma.employee.findMany({
    select: {
      id: true,
      username: true,
      roles: true,
    },
  });
  return res;
};

export const prismaGetEmployeeStats = async (id: number) => {
  try {
    // return await getTotalCount(id);
    const lastRecordDate = await getLastRecordDate(id);

    const [totalUsersCount, recentUsersCount] = await Promise.all([
      getTotalCount(id),
      getUsersCountByDate(id, lastRecordDate),
    ]);

    const employeeStats = {
      totalUsersCount,
      lastRecordDate: lastRecordDate
        ? format(lastRecordDate, "d MMMM yyyy", { locale: ru })
        : null,
      recentUsersCount,
    };

    return employeeStats;
  } catch (e) {
    return { error: "Статистика не получена:\n" + e };
  }
};

const getLastRecordDate = async (id: number): Promise<Date | null> => {
  try {
    const data = await prisma.employee.findFirst({
      where: { id },
      orderBy: { id: "desc" },
      select: { createdAt: true },
    });
    return data?.createdAt || null;
  } catch (e) {
    throw new Error("Дата последней записи не получена:/n" + e);
  }
};

const getTotalCount = async (id: number) => {
  try {
    return await prisma.employee.count({
      where: { id },
    });
  } catch (e) {
    throw new Error("Количество пользователей не получено:\n" + e);
  }
};

const getUsersCountByDate = async (
  managerId: number,
  date: Date | null
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

export const prismaGetEmployeeById = async (id: number) => {
  try {
    const employee = await prisma.employee.findUnique({
      where: { id },
      select: { id: true, username: true, roles: true },
    });
    if (!employee) throw new Error();
    return employee;
  } catch (e) {
    return { error: "Менеджер не получен " + e };
  }
};

export const prismaGetHaqBotEmployee = async () => {
  let result;
  try {
    console.log("NAME:", HAQ_BOT_NAME);
    console.log("PASS:", HAQ_BOT_PASS);

    const res = await prismaLogin({
      username: "haq_bot",
      password: "haq_bot_portal_password123",
    });
    if ("error" in res) throw new Error();
    result = await prismaGetEmployeeById(res.id);
  } catch (e) {
    result = { error: "Бот не получен\n" + e };
  }
  return result;
};
