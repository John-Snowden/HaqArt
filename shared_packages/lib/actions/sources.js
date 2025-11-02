"use server";
import prisma from "@shared/prisma";
export const prismaGetSources = async () => {
    try {
        return await prisma.source.findMany();
    }
    catch (e) {
        return { error: "Источники не получены:\n" + e };
    }
};
export const prismaSaveSource = async (title, sourceLink, category, authorId) => {
    try {
        return await prisma.source.create({
            data: { title, sourceLink, category, authorId },
        });
    }
    catch (e) {
        return { error: "Источник не создан:\n" + e };
    }
};
export const prismaDeleteSource = async (id) => {
    try {
        return await prisma.source.delete({ where: { id } });
    }
    catch (e) {
        return { error: "Источник не удален:\n" + e };
    }
};
