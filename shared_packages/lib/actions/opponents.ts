"use server";

import prisma from "@shared/prisma";
import { Opponent, Prisma } from "@shared/prisma/prisma/client";

const include = {
  author: { select: { username: true } },
} satisfies Prisma.OpponentInclude;
export type OpponentFull = Prisma.OpponentGetPayload<{
  include: typeof include;
}>;
export type EditableOpponentFields = Omit<Opponent, "id" | "createdAt">;

export const prismaGetOpponents = async () => {
  return await prisma.opponent.findMany({ include });
};

export const prismaUpsertOpponent = async (
  opponent: EditableOpponentFields,
  opponentId?: number
) => {
  return opponentId === undefined
    ? await prisma.opponent.create({
        data: opponent,
      })
    : await prisma.opponent.update({
        data: opponent,
        where: { id: opponentId },
      });
};

export const prismaDeleteOpponent = async (opponentId: number) => {
  return await prisma.opponent.delete({ where: { id: opponentId } });
};
