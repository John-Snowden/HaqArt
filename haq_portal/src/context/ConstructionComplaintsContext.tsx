"use client";

import { createContext, FC, ReactNode, useContext, useMemo } from "react";

import { useRootStore } from "./RootContext";
import ConstructionComplaintsVM from "@/screens/constructionComplaints/constructionComplaintsVM";

const Context = createContext<ConstructionComplaintsVM | null>(null);
export const useConstructionComplaintsVM = () => {
  const constructionStore = useContext(Context);
  if (!constructionStore)
    throw new Error("Outside ConstructionComplaintsContext");
  else return constructionStore;
};

interface Props {
  children: ReactNode;
}

export const ConstructionComplaintsContext: FC<Props> = ({ children }) => {
  const rootStore = useRootStore();
  const constructionComplaintsVM = useMemo(
    () => new ConstructionComplaintsVM(rootStore),
    [rootStore],
  );

  return <Context value={constructionComplaintsVM}>{children}</Context>;
};
