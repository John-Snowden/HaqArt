"use client";

import { useEffect, useMemo } from "react";

import { ROUTES } from "@/constants/routes";
import { OpponentsListContext } from "@/screens/opponentsList/hooks";
import OpponentsListVM from "@/screens/opponentsList/opponentsList.vm";
import { OpponentsListScreen } from "@/screens/opponentsList/OpponentsListScreen";

import { useRootStore } from "../RootClientContext";

export default function OpponentsList() {
  const rootStore = useRootStore();
  const opponentsVM = useMemo(
    () => new OpponentsListVM(rootStore),
    [rootStore]
  );

  useEffect(() => {
    if (!rootStore.authStore.isSuperRole)
      rootStore.routerStore.replace(ROUTES.DESK);
  }, [rootStore]);

  return (
    <OpponentsListContext.Provider value={opponentsVM}>
      <OpponentsListScreen />
    </OpponentsListContext.Provider>
  );
}
