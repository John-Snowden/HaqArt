"use client";

import { FC, ReactNode } from "react";
import { createCustomContext } from "./createCustomContext";
import EditOriginVM from "@/screens/editOrigin/editOrigin.vm";

interface Props {
  children: ReactNode;
}

const [Context, useEditOriginVM] = createCustomContext(EditOriginVM);

export const EditOriginContext: FC<Props> = ({ children }) => {
  return <Context>{children}</Context>;
};

export { useEditOriginVM };
