"use client";

import { FC, ReactNode } from "react";

import CasesListVM from "@/screens/casesList/casesList.vm";
import { createCustomContext } from "./createCustomContext";

interface Props {
  children: ReactNode;
}

const [Context, useCasesListVM] = createCustomContext(CasesListVM);

export const CasesListContext: FC<Props> = ({ children }) => {
  return <Context>{children}</Context>;
};

export { useCasesListVM };
