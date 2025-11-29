"use server";

import prisma from "@shared/prisma";
import { Case, CASE_CATEGORY, Prisma } from "@shared/prisma/prisma/client";

const include = {
  person: {
    select: {
      name: true,
      link: true,
      phoneNumber: true,
      email: true,
      homeAddress: true,
    },
  },
  manager: { select: { username: true } },
  opponent: { select: { name: true } },
  author: { select: { id: true } },
} satisfies Prisma.CaseInclude;

export type CaseFull = Prisma.CaseGetPayload<{
  include: typeof include;
}>;
export type EditableCaseFields = Omit<Case, "id" | "createdAt">;

export const prismaGetCases = async (where: Prisma.CaseWhereInput) => {
  return prisma.case.findMany({
    where,
    include,
  });
};

export const prismaUpsertCase = async (
  personCase: EditableCaseFields,
  caseId?: number
) => {
  return caseId === undefined
    ? await prisma.case.create({
        data: personCase,
      })
    : await prisma.case.update({
        data: personCase,
        where: { id: caseId },
      });
};
