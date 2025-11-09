"use client";

import { createContext, FC, ReactNode, useContext, useMemo } from "react";

import DenialOfEntryVM from "@/screens/denialOfEntry/denialOfEntryVM";

import { useRootStore } from "./RootContext";

const Context = createContext<DenialOfEntryVM | null>(null);
export const useDenialOfEntryVM = () => {
  const vm = useContext(Context);
  if (!vm) throw new Error("Outside DenialOfEntryVM");
  else return vm;
};

interface Props {
  children: ReactNode;
}

export const DenialOfEntryContext: FC<Props> = ({ children }) => {
  const rootStore = useRootStore();
  const denialOfEntryVM = useMemo(
    () => new DenialOfEntryVM(rootStore),
    [rootStore],
  );

  return <Context value={denialOfEntryVM}>{children}</Context>;
};
