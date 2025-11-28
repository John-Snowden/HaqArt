"use server";

import prisma from "@shared/prisma/index";
import { ROLE } from "@shared/prisma/prisma/client";

type EmployeeBasic = { username: string; password: string; roles: ROLE[] };

export const createEmployees = async () => {
  const employees: EmployeeBasic[] = [
    { username: "Oris", password: "Oris123!", roles: [ROLE.DEV] },
    { username: "Artyom", password: "Pirate", roles: [ROLE.OWNER] },
    { username: "Roman", password: "Ceo", roles: [ROLE.CEO] },
    { username: "Sadiq", password: "SadiqSadiq", roles: [ROLE.LAWYER] },
    { username: "Nurdona", password: "NurNur", roles: [ROLE.SMM_MANAGER] },
    {
      username: "Iroda",
      password: "!Iroda!",
      roles: [ROLE.ACCOUNT_MANAGER, ROLE.SALES_MANAGER],
    },
    {
      username: "haq_bot",
      password: "haq_bot_portal_password123",
      roles: [ROLE.BOT],
    },
  ];
  // try {
  //   await prisma.employee.delete({ where: { username: "Sadiq" } });
  //   await prisma.employee.delete({ where: { username: "sadiq" } });
  // } catch (e) {
  //   throw new Error("Account not deleted: " + e);
  // }

  try {
    const res = employees.map(async (employee) => createEmployee(employee));
    return res;
  } catch (e) {
    return { error: "Аккаунт не создан: " + e };
  }
};

export const createEmployee = async (employee: EmployeeBasic) => {
  try {
    const res = await prismaCreateEmployee(employee);
    return res;
  } catch (e) {
    console.log(e);
    return { error: "Не создан: " + e };
  }
};

const prismaCreateEmployee = async (employee: EmployeeBasic) => {
  return await prisma.employee.create({
    data: {
      username: employee.username.toLowerCase(),
      password: employee.password,
      roles: employee.roles,
    },
  });
};
