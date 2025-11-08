"use client";

import { createContext, useContext, useMemo } from "react";

import ProfileVM from "@/screens/profile/provfile.vm";
import { ProfileScreen } from "@/screens/profile/ProfileScreen";

import { useRootStore } from "../RootClientContext";

const ProfileContext = createContext<ProfileVM | null>(null);
export const useProfileVM = () => {
  const vm = useContext(ProfileContext);
  if (!vm) throw new Error("Out of ProfileContext");
  else return vm;
};

export default function Profile() {
  const rootStore = useRootStore();
  const vm = useMemo(() => new ProfileVM(rootStore), [rootStore]);

  return (
    <ProfileContext value={vm}>
      <ProfileScreen />
    </ProfileContext>
  );
}
