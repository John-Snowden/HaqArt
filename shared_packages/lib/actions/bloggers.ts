"use server";

import prisma from "@shared/prisma";
import { Blogger, Prisma } from "@shared/prisma/prisma/client";

const include = {
  author: {
    select: {
      id: true,
      username: true,
    },
  },
} satisfies Prisma.BloggerInclude;
export type BloggerFull = Prisma.BloggerGetPayload<{
  include: typeof include;
}>;
export type EditableBloggerFields = Omit<Blogger, "id" | "createdAt">;

export const prismaGetBloggers = async () => {
  return await prisma.blogger.findMany({ include });
};

export const prismaUpsertBlogger = async (
  blogger: EditableBloggerFields,
  bloggerId: number | undefined
) => {
  return bloggerId === undefined
    ? await prisma.blogger.create({ data: blogger })
    : await prisma.blogger.update({ data: blogger, where: { id: bloggerId } });
};
