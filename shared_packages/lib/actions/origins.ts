"use server";

import prisma from "@shared/prisma";
import { Origin, Prisma } from "@shared/prisma/prisma/client";

const include = {
  author: { select: { username: true } },
} satisfies Prisma.OriginInclude;

export type EditableOriginFields = Omit<Origin, "id" | "createdAt">;
export type OriginFull = Prisma.OriginGetPayload<{
  include: typeof include;
}>;

export const prismaGetOrigins = async () => {
  return await prisma.origin.findMany({ include });
};

export const prismaUpsertOrigin = async (
  origin: EditableOriginFields,
  originId?: number
) => {
  return originId === undefined
    ? await prisma.origin.create({
        data: origin,
      })
    : await prisma.origin.update({
        data: origin,
        where: { id: originId },
      });
};
