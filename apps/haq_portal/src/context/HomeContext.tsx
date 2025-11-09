"use client";

import { createContext, FC, ReactNode, useContext, useMemo } from "react";

import HomeVM from "@/screens/home/homeVM";

import { useRootStore } from "./RootContext";

const Context = createContext<HomeVM | null>(null);
export const useHomeVM = () => {
  const homeVM = useContext(Context);
  if (!homeVM) throw new Error("Outside HomeVM");
  else return homeVM;
};

interface Props {
  children: ReactNode;
}

export const HomeContext: FC<Props> = ({ children }) => {
  const rootStore = useRootStore();
  const homeVM = useMemo(() => new HomeVM(rootStore), [rootStore]);

  return <Context value={homeVM}>{children}</Context>;
};
