"use client";

import { createContext, useContext, useMemo } from "react";

import SourcesListVM from "@/screens/sourcesList/sourcesList.vm";
import { SourcesListScreen } from "@/screens/sourcesList/SourcesListScreen";

import { useRootStore } from "../RootClientContext";

const SourcesListContext = createContext<SourcesListVM | null>(null);
export const useSourcesListVM = () => {
  const vm = useContext(SourcesListContext);
  if (!vm) throw new Error("Outside SourcesListContext");
  else return vm;
};

export default function SourcesList() {
  const rootStore = useRootStore();
  const sourcesVM = useMemo(() => new SourcesListVM(rootStore), [rootStore]);

  return (
    <SourcesListContext value={sourcesVM}>
      <SourcesListScreen />
    </SourcesListContext>
  );
}
