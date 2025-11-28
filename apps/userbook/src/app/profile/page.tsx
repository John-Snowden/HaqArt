"use client";

import { ProfileContext } from "@/context";
import { ProfileScreen } from "@/screens/profile";

export default function Profile() {
  return (
    <ProfileContext>
      <ProfileScreen />
    </ProfileContext>
  );
}
