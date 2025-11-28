"use client";

import React, {
  FC,
  useMemo,
  ReactNode,
  useContext,
  createContext,
} from "react";

import { useRootStore } from "@/context";
import RootStore from "@/stores/rootStore";

export const createCustomContext = <T,>(
  VMClass: new (root: RootStore) => T,
) => {
  const Ctx = createContext<T | null>(null);

  const useVM = () => {
    const vm = useContext(Ctx);
    if (!vm) throw new Error(`Outside ${VMClass.name} context`);
    return vm;
  };

  const Provider: FC<{ children: ReactNode }> = ({ children }) => {
    const rootStore = useRootStore();
    const vm = useMemo(() => new VMClass(rootStore), [rootStore]);
    return <Ctx value={vm}>{children}</Ctx>;
  };

  return [Provider, useVM] as const;
};
