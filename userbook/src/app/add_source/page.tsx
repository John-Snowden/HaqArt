"use client";

import { createContext, useContext, useEffect, useMemo } from "react";

import { ROUTES } from "@/constants/routes";
import AddSourceVM from "@/screens/addSource/addSource.vm";
import { AddSourceScreen } from "@/screens/addSource/AddSourceScreen";

import { useRootStore } from "../RootClientContext";

const AddSourceContext = createContext<AddSourceVM | null>(null);
export const useAddSourceVm = () => {
  const vm = useContext(AddSourceContext);
  if (!vm) throw new Error("Outside AddSourceContext");
  else return vm;
};

export default function AddSource() {
  const rootStore = useRootStore();
  const vm = useMemo(() => new AddSourceVM(rootStore), [rootStore]);

  useEffect(() => {
    if (!rootStore.authStore.isSuperRole)
      rootStore.routerStore.replace(ROUTES.DESK);
  }, [rootStore]);

  return (
    <AddSourceContext value={vm}>
      <AddSourceScreen />
    </AddSourceContext>
  );
}
