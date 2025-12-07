// import { Call } from "@shared/prisma/prisma/client";

// export const getEarliestCall = (calls: Call[]): Call | null => {
//   const sortedAsc = [...calls].sort(
//     (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
//   );
//   return sortedAsc.at(0) ?? null;
// };

// export const getLatestCall = (calls: Call[]): Call | null => {
//   const sortedAsc = [...calls].sort(
//     (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
//   );
//   return sortedAsc.at(-1) ?? null;
// };
