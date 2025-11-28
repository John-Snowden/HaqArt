"use client";

import { FC, ReactNode } from "react";
import EditCaseVM from "@/screens/editCase/editCase.vm";
import { createCustomContext } from "./createCustomContext";

const [Context, useEditCaseVM] = createCustomContext(EditCaseVM);

interface Props {
  children: ReactNode;
}

export const EditCaseContext: FC<Props> = ({ children }) => {
  return <Context>{children}</Context>;
};

export { useEditCaseVM };
