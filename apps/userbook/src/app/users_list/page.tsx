"use client";

import { createContext, useContext, useEffect, useMemo } from "react";

import { ROUTES } from "@/constants/routes";
import UsersListVM from "@/screens/usersList/usersList.vm";
import { UserListScreen } from "@/screens/usersList/UsersListScreen";

import { useRootStore } from "../RootClientContext";

const UsersListContext = createContext<UsersListVM | null>(null);
export const useUsersListVM = () => {
  const vm = useContext(UsersListContext);
  if (!vm) throw new Error("Outside UsersListContext");
  else return vm;
};

export default function UsersList() {
  const rootStore = useRootStore();
  const sourcesVM = useMemo(() => new UsersListVM(rootStore), [rootStore]);

  return (
    <UsersListContext value={sourcesVM}>
      <UserListScreen />
    </UsersListContext>
  );
}
