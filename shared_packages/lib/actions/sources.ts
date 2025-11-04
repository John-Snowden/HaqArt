"use server";

import prisma from "@shared/prisma";
import { Source, SOURCE_CATEGORY } from "@shared/prisma/prisma/client";

export const prismaGetSources = async () => {
  try {
    return await prisma.source.findMany();
  } catch (e) {
    return { error: "Источники не получены:\n" + e };
  }
};

export const prismaSaveSource = async (
  source: Omit<Source, "id" | "createdAt">,
) => {
  console.log("prismaSaveSource", source);
  try {
    return await prisma.source.create({
      data: { ...source },
    });
  } catch (e) {
    return { error: "Источник не создан:\n" + e };
  }
};

export const prismaUpdateSource = async (source: Source) => {
  try {
    return await prisma.source.update({
      where: { id: source.id },
      data: { ...source },
    });
  } catch (e) {
    return { error: "Источник не обновлен " + e };
  }
};

export const prismaDeleteSource = async (id: number) => {
  try {
    return await prisma.source.delete({ where: { id } });
  } catch (e) {
    return { error: "Источник не удален:\n" + e };
  }
};

export const prismaGetSourcesByAuthorId = async (authorId: number) => {
  try {
    return await prisma.source.findMany({ where: { authorId } });
  } catch (e) {
    return { error: "Источники не найдены:\n" + e };
  }
};
