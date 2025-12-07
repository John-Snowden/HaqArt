export const getEarliestDate = (dates: Date[]): Date | null => {
  const sorted = [...dates].sort((a, b) => a.getTime() - b.getTime());
  return sorted.at(0) ?? null;
};

export const getLatestDate = (dates: Date[]): Date | null => {
  const sorted = [...dates].sort((a, b) => a.getTime() - b.getTime());
  return sorted.at(-1) ?? null;
};
