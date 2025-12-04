"use server";

import prisma from "@shared/prisma";
import { Person, Prisma } from "@shared/prisma/prisma/client";

const include = {
  origin: { select: { title: true } },
  author: {
    select: {
      id: true,
      username: true,
    },
  },
  calls: {
    take: 1,
    orderBy: { createdAt: "desc" },
  },
  cases: {
    select: { nextDialDate: true },
    orderBy: { nextDialDate: "asc" },
  },
} satisfies Prisma.PersonInclude;

export type PersonFull = Prisma.PersonGetPayload<{
  include: typeof include;
}>;
export type EditablePersonFields = Omit<Person, "id" | "createdAt">;

export const prismaGetPersons = async (where: Prisma.PersonWhereInput) => {
  return await prisma.person.findMany({
    where,
    include,
    orderBy: { id: "desc" },
    // TODO
    // take: 3,
  });
};

export const prismaUpsertPerson = async (
  person: EditablePersonFields,
  personId?: number,
) => {
  return personId === undefined
    ? await prisma.person.create({ data: person })
    : await prisma.person.update({ data: person, where: { id: personId } });
};

export const prismaDeletePerson = async (personId: number) => {
  return await prisma.person.delete({ where: { id: personId } });
};
