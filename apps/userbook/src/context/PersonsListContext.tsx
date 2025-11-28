"use client";

import { FC, ReactNode } from "react";
import { createCustomContext } from "./createCustomContext";
import PersonsListVM from "@/screens/personsList/personsList.vm";

interface Props {
  children: ReactNode;
}

const [Context, usePersonsListVM] = createCustomContext(PersonsListVM);

export const PersonsListContext: FC<Props> = ({ children }) => {
  return <Context>{children}</Context>;
};

export { usePersonsListVM };
