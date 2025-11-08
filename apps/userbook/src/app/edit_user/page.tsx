"use client";

import { createContext, useContext, useMemo } from "react";

import EditUserVM from "@/screens/editUser/editUser.vm";
import { EditUserScreen } from "@/screens/editUser/EditUser";

import { useRootStore } from "../RootClientContext";

const EditUserContext = createContext<EditUserVM | null>(null);
export const useEditUserVM = () => {
  const vm = useContext(EditUserContext);
  if (!vm) throw new Error("Outside EditUserContext");
  else return vm;
};

export default function EditUser() {
  const rootStore = useRootStore();
  const vm = useMemo(() => new EditUserVM(rootStore), [rootStore]);

  return (
    <EditUserContext value={vm}>
      <EditUserScreen />
    </EditUserContext>
  );
}
