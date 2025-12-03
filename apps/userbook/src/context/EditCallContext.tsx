"use client";

import { FC, ReactNode } from "react";
import { EditCallVM } from "@/screens/editCall";
import { createCustomContext } from "./createCustomContext";

const [Provider, useEditCallVM] = createCustomContext(EditCallVM);

interface Props {
  children: ReactNode;
}

export const EditCallContext: FC<Props> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export { useEditCallVM };
