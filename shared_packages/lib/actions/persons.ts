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
} satisfies Prisma.PersonInclude;

export type PersonFull = Prisma.PersonGetPayload<{
  include: typeof include;
}>;
export type EditablePersonFields = Omit<Person, "id" | "createdAt">;

export const prismaGetPersonsByOrigin = async (originId: number) => {
  const where = { originId } satisfies Prisma.PersonWhereInput;
  return await prisma.person.findMany({
    where,
    include,
    orderBy: { id: "desc" },
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

// TODO search cases, not persons. WRONG! persons
// export const prismaSearchUser = async (search: string) => {
//   try {
//     return await prisma.user.findMany({
//       where: {
//         OR: [
//           { username: { contains: search, mode: "insensitive" } },
//           { userLink: { contains: search, mode: "insensitive" } },
//         ],
//       },
//     });
//   } catch (e) {
//     return { error: "Лиды не получены:\n" + e };
//   }
// };
