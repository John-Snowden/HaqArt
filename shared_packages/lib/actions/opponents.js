"use server";
import prisma from "@shared/prisma";
export const prismaGetOpponents = async () => {
  try {
    return await prisma.opponent.findMany();
  } catch (e) {
    return { error: "Оппоненты не получены:\n" + e };
  }
};
export const prismaCreateOpponent = async (opponent) => {
  try {
    return await prisma.opponent.create({
      data: { name: opponent.name, link: opponent.link, info: opponent.info },
    });
  } catch (e) {
    return { error: "Оппонент не создан:\n" + e };
  }
};
export const prismaUpdateOpponent = async (opponent) => {
  try {
    return await prisma.opponent.update({
      where: { id: opponent.id },
      data: { name: opponent.name, link: opponent.link, info: opponent.info },
    });
  } catch (e) {
    return { error: "Оппонент не обновлен:\n" + e };
  }
};
export const prismaDeleteOpponent = async (id) => {
  try {
    return await prisma.opponent.delete({ where: { id } });
  } catch (e) {
    return { error: "Оппонент не удален:\n" + e };
  }
};
