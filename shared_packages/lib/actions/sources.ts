"use server";

import prisma from "@shared/prisma";
import { SOURCE_CATEGORY } from "@shared/prisma/prisma/client";

export const prismaGetSources = async () => {
  try {
    return await prisma.source.findMany();
  } catch (e) {
    return { error: "Источники не получены:\n" + e };
  }
};

export const prismaSaveSource = async (
  title: string,
  sourceLink: string | null,
  category: SOURCE_CATEGORY,
  authorId: number,
) => {
  try {
    return await prisma.source.create({
      data: { title, sourceLink, category, authorId },
    });
  } catch (e) {
    return { error: "Источник не создан:\n" + e };
  }
};

export const prismaDeleteSource = async (id: number) => {
  try {
    return await prisma.source.delete({ where: { id } });
  } catch (e) {
    return { error: "Источник не удален:\n" + e };
  }
};
