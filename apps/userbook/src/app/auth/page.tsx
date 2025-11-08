"use client";
import { createContext, useContext, useMemo } from "react";

import AuthVM from "@/screens/auth/auth.vm";
import { AuthScreen } from "@/screens/auth/AuthScreen";

import { useRootStore } from "../RootClientContext";

const AuthContext = createContext<AuthVM | null>(null);
export const useAuthVM = () => {
  const vm = useContext(AuthContext);
  if (!vm) throw new Error("useContext called outside of AuthContext");
  else return vm;
};

const Auth = () => {
  const rootStore = useRootStore();
  const authVM = useMemo(() => new AuthVM(rootStore), [rootStore]);

  return (
    <AuthContext value={authVM}>
      <AuthScreen />
    </AuthContext>
  );
};

export default Auth;
