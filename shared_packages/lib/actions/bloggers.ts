"use server";

import prisma from "@shared/prisma";
import { SOURCE_CATEGORY } from "@shared/prisma/prisma/client";

export const prismaGetBloggers = async () => {
  try {
    return await prisma.blogger.findMany();
  } catch (e) {
    return { error: "Блогеры не получены:\n" + e };
  }
};

export const prismaSaveBlogger = async (blogger: {
  name: string;
  link: string;
  subscribersCount: number;
  info: string;
  priceSOM: number | null;
  priceUSD: number | null;
  phoneNumber: string | null;
  email: string | null;
  categories: SOURCE_CATEGORY[];
  authorId: number;
}) => {
  try {
    return await prisma.blogger.create({
      data: {
        name: blogger.name,
        link: blogger.link,
        subscribersCount: blogger.subscribersCount,
        info: blogger.info,
        priceSOM: blogger.priceSOM,
        priceUSD: blogger.priceUSD,
        phoneNumber: blogger.phoneNumber,
        email: blogger.email,
        categories: blogger.categories,
        authorId: blogger.authorId,
      },
    });
  } catch (e) {
    return { error: "Блогер не создан:\n" + e };
  }
};

export const prismaUpdateBlogger = async (blogger: {
  id: number;
  name: string;
  link: string;
  subscribersCount: number;
  info: string;
  priceSOM: number | null;
  priceUSD: number | null;
  phoneNumber: string | null;
  email: string | null;
  categories: SOURCE_CATEGORY[];
}) => {
  try {
    return await prisma.blogger.update({
      where: { id: blogger.id },
      data: {
        name: blogger.name,
        link: blogger.link,
        subscribersCount: blogger.subscribersCount,
        info: blogger.info,
        priceSOM: blogger.priceSOM,
        priceUSD: blogger.priceUSD,
        phoneNumber: blogger.phoneNumber,
        email: blogger.email,
        categories: blogger.categories,
      },
    });
  } catch (e) {
    return { error: "Блогер не обновлен:\n" + e };
  }
};

export const prismaDeleteBlogger = async (id: number) => {
  try {
    return await prisma.blogger.delete({ where: { id } });
  } catch (e) {
    return { error: "Блогер не удален:\n" + e };
  }
};
