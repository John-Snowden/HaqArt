"use server";

import prisma from "@shared/prisma";

export const prismaLogin = async (username: string, password: string) => {
  try {
    const manager = await prisma.manager.findUnique({
      where: { username, password },
    });

    if (!manager) throw new Error();
    else return manager;
  } catch (e) {
    return { error: "Аккаунт не найден:\n" + e };
  }
};
