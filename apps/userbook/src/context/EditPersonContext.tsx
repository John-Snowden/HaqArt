"use client";

import { FC, ReactNode } from "react";
import { createCustomContext } from "./createCustomContext";
import EditPersonVM from "@/screens/editPerson/editPerson.vm";

interface Props {
  children: ReactNode;
}

const [Context, useEditPersonVM] = createCustomContext(EditPersonVM);

export const EditPersonContext: FC<Props> = ({ children }) => {
  return <Context>{children}</Context>;
};

export { useEditPersonVM };
