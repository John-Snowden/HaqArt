"use client";

import { AuthScreen } from "@/screens";
import { AuthContext } from "@/context";

const Auth = () => {
  return (
    <AuthContext>
      <AuthScreen />
    </AuthContext>
  );
};

export default Auth;
