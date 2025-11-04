import { SOURCE_CATEGORY } from "@shared/prisma/prisma/client";

export const categoryOptions: { option: SOURCE_CATEGORY; label: string }[] = [
  { option: SOURCE_CATEGORY.none, label: "-" },
  { option: SOURCE_CATEGORY.loans, label: "кредиты" },
  { option: SOURCE_CATEGORY.realEstate, label: "строительство" },
  { option: SOURCE_CATEGORY.other, label: "другое" },
];
