"use client";

import { FC, ReactNode } from "react";
import { createCustomContext } from "./createCustomContext";
import OriginsListVM from "@/screens/originsList/originsList.vm";

interface Props {
  children: ReactNode;
}

const [Context, useOriginsListVM] = createCustomContext(OriginsListVM);

export const OriginsListContext: FC<Props> = ({ children }) => {
  return <Context>{children}</Context>;
};

export { useOriginsListVM };
