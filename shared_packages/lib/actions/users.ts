"use server";

import prisma from "@shared/prisma";
import { LEAD_STATUS, TASK_STATUS, User } from "@shared/prisma/prisma/client";

export const prismaGetUserById = async (id: number) => {
  try {
    return await prisma.user.findUnique({ where: { id } });
  } catch (e) {
    return { error: "Лид не получен:\n" + e };
  }
};

export const prismaGetFilteredUsers = async (filteres: Record<string, any>) => {
  try {
    const filtersArr = Object.entries(filteres).filter(([, value]) => {
      return value !== "none";
    });

    // basic filter setup
    let where = {
      OR: [
        { managerId: { not: null } },
        { phoneNumber: { not: null } },
        { email: { not: null } },
      ],
      taskStatus: {
        notIn: [
          TASK_STATUS.done,
          TASK_STATUS.weRefused,
          TASK_STATUS.leadRefused,
        ],
      },
    };

    // override basic setup
    filtersArr.forEach((filter) => {
      where = { ...where, [filter[0]]: filter[1] };
    });

    return await prisma.user.findMany({ where });
  } catch (e) {
    return { error: "Лиды не получены\n" + e };
  }
};

export const prismaGetUsersBySource = async (sourceId: number) => {
  try {
    return await prisma.user.findMany({
      where: { sourceId },
      orderBy: { id: "desc" },
      // take: 3,
    });
  } catch (e) {
    return { error: "Лиды не получены:\n" + e };
  }
};

export const prismaSearchUser = async (search: string) => {
  try {
    return await prisma.user.findMany({
      where: {
        OR: [
          { username: { contains: search, mode: "insensitive" } },
          { userLink: { contains: search, mode: "insensitive" } },
        ],
      },
    });
  } catch (e) {
    return { error: "Лиды не получены:\n" + e };
  }
};

export const prismaSaveUser = async (user: Omit<User, "id" | "createdAt">) => {
  try {
    if (!user.authorId || !user.sourceId) {
      throw new Error("authorId или sourceId = undefined");
    }
    return await prisma.user.create({
      data: { ...user },
    });
  } catch (e) {
    return { error: "Новый лид не добавлен:\n" + e };
  }
};

export const prismaUpdateUser = async (
  user: Omit<User, "createdAt" | "sourceId" | "authorId">
) => {
  try {
    return await prisma.user.update({
      where: { id: user.id },
      data: { ...user },
    });
  } catch (e) {
    return { error: "Лид не обновлен " + e };
  }
};

export const prismaDeleteUser = async (id: number) => {
  try {
    return await prisma.user.delete({ where: { id } });
  } catch (e) {
    return { error: "Лид не удален:\n" + e };
  }
};
