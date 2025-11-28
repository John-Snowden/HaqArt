"use client";

import { FC, ReactNode } from "react";
import { createCustomContext } from "./createCustomContext";
import OpponentsListVM from "@/screens/opponentsList/opponentsList.vm";

interface Props {
  children: ReactNode;
}

const [Context, useOpponentsListVM] = createCustomContext(OpponentsListVM);

export const OpponentsListContext: FC<Props> = ({ children }) => {
  return <Context>{children}</Context>;
};

export { useOpponentsListVM };
