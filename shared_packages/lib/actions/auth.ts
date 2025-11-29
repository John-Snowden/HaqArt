"use server";

import prisma from "@shared/prisma";

export type EmployeeCreds = {
  username: string;
  password: string;
};

export const prismaLogin = async (creds: EmployeeCreds) => {
  return await prisma.employee.findUnique({ where: creds });
};
