"use client";

import { FC, ReactNode } from "react";
import AuthVM from "@/screens/auth/auth.vm";
import { createCustomContext } from "./createCustomContext";

interface Props {
  children: ReactNode;
}

const [Context, useAuthVM] = createCustomContext(AuthVM);

export const AuthContext: FC<Props> = ({ children }) => {
  return <Context>{children}</Context>;
};

export { useAuthVM };
