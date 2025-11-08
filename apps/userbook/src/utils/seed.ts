"use server";

import prisma from "@shared/prisma/index";
import { ROLES } from "@shared/prisma/prisma/client";

export const addManager = async () => {
  const managers: { username: string; password: string; role: ROLES }[] = [
    { username: "Oris", password: "Oris123!", role: "dev" },
    { username: "Artyom", password: "Pirate", role: "owner" },
    { username: "Roman", password: "Ceo", role: "ceo" },
    { username: "Sadiq", password: "SadiqSadiq", role: "manager" },
    { username: "Nurdona", password: "NurNur", role: "manager" },
    {
      username: "haq_bot",
      password: "haq_bot_portal_password123",
      role: "bot",
    },
  ];
  // try {
  //   await prisma.manager.delete({ where: { username: "Sadiq" } });
  //   await prisma.manager.delete({ where: { username: "sadiq" } });
  // } catch (e) {
  //   throw new Error("Account not deleted: " + e);
  // }

  try {
    const res = managers.map(async (manager) => {
      await prisma.manager.create({
        data: {
          username: manager.username.toLowerCase(),
          password: manager.password,
          role: manager.role,
        },
      });
    });

    return res;
  } catch (e) {
    return { error: "Аккаунт не создан: " + e };
  }
};
