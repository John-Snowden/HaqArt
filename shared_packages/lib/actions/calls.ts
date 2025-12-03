"use server";

import prisma from "@shared/prisma";
import { Call, Prisma } from "@shared/prisma/prisma/client";

const include = {
  author: { select: { username: true } },
  case: {
    select: {
      opponent: { select: { name: true } },
      categories: true,
    },
  },
} satisfies Prisma.CallInclude;
export type EditableCallFields = Omit<Call, "id" | "createdAt">;
export type CallFull = Prisma.CallGetPayload<{ include: typeof include }>;

export const prismaGetCalls = async (where: Prisma.CallWhereInput) => {
  return await prisma.call.findMany({
    where,
    include,
  });
};

export const prismaUpsertCall = async (
  call: EditableCallFields,
  callId?: number
) => {
  return callId === undefined
    ? await prisma.call.create({ data: call })
    : await prisma.call.update({
        data: call,
        where: { id: callId },
      });
};
