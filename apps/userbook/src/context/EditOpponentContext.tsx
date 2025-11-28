"use client";

import { FC, ReactNode } from "react";
import { createCustomContext } from "./createCustomContext";
import EditOpponentVM from "@/screens/editOpponent/editOpponent.vm";

interface Props {
  children: ReactNode;
}

const [Context, useEditOpponentVM] = createCustomContext(EditOpponentVM);

export const EditOpponentContext: FC<Props> = ({ children }) => {
  return <Context>{children}</Context>;
};

export { useEditOpponentVM };
