"use client";

import { createContext, useContext, useEffect, useMemo } from "react";

import { ROUTES } from "@/constants/routes";
import SourceVM from "@/screens/source/source.vm";
import { SourceScreen } from "@/screens/source/SourceScreen";

import { useRootStore } from "../RootClientContext";

const SourceContext = createContext<SourceVM | null>(null);
export const useSourceVM = () => {
  const vm = useContext(SourceContext);
  if (!vm) throw new Error("Outside SourceContext");
  else return vm;
};

export default function Source() {
  const rootStore = useRootStore();
  const usersVM = useMemo(() => new SourceVM(rootStore), [rootStore]);

  return (
    <SourceContext value={usersVM}>
      <SourceScreen />
    </SourceContext>
  );
}
