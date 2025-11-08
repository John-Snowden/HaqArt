"use client";

import { createContext, useContext, useMemo } from "react";

import EditSourceVM from "@/screens/editSource/editSource.vm";
import { EditSourceScreen } from "@/screens/editSource/EditSourceScreen";

import { useRootStore } from "../RootClientContext";

const EditSourceContext = createContext<EditSourceVM | null>(null);
export const useEditSourceVM = () => {
  const vm = useContext(EditSourceContext);
  if (!vm) throw new Error("Outside EditSourceContext");
  else return vm;
};

export default function EditSource() {
  const rootStore = useRootStore();
  const vm = useMemo(() => new EditSourceVM(rootStore), [rootStore]);

  return (
    <EditSourceContext value={vm}>
      <EditSourceScreen />
    </EditSourceContext>
  );
}
