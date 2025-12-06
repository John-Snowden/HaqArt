import { Call } from "@shared/prisma/prisma/client";

export const getLastCall = (calls: Call[]): Call | null => {
  const sortedAsc = [...calls].sort(
    (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
  );
  return sortedAsc.at(-1) ?? null;
};
