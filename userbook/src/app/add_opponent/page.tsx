"use client";

import { useEffect, useMemo } from "react";

import { ROUTES } from "@/constants/routes";
import AddOpponentVM from "@/screens/addOpponent/addOpponent.vm";
import { AddOpponentContext } from "@/screens/addOpponent/hooks";
import { AddOpponentScreen } from "@/screens/addOpponent/AddOpponentScreen";

import { useRootStore } from "../RootClientContext";

export default function AddOpponent() {
  const rootStore = useRootStore();
  const vm = useMemo(() => new AddOpponentVM(rootStore), [rootStore]);

  useEffect(() => {
    if (!rootStore.authStore.isSuperRole)
      rootStore.routerStore.replace(ROUTES.DESK);
  }, [rootStore]);

  return (
    <AddOpponentContext.Provider value={vm}>
      <AddOpponentScreen />
    </AddOpponentContext.Provider>
  );
}
