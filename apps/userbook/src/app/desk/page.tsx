"use client";

import { createContext, useContext, useMemo } from "react";

import DeskVM from "@/screens/desk/deskScreen.vm";
import { DeskScreen } from "@/screens/desk/DeskScreen";

import { useRootStore } from "../RootClientContext";

const DeskContext = createContext<null | DeskVM>(null);
export const useDeskVM = () => {
  const vm = useContext(DeskContext);
  if (!vm) throw new Error("Outside DeskContext");
  else return vm;
};

export default function Desk() {
  const rootStore = useRootStore();
  const deskVM = useMemo(() => new DeskVM(rootStore), [rootStore]);

  return (
    <DeskContext value={deskVM}>
      <DeskScreen />
    </DeskContext>
  );
}
