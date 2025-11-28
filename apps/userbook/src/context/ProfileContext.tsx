"use client";

import { FC, ReactNode } from "react";
import ProfileVM from "@/screens/profile/profile.vm";
import { createCustomContext } from "./createCustomContext";

interface Props {
  children: ReactNode;
}

const [Context, useProfileVM] = createCustomContext(ProfileVM);

export const ProfileContext: FC<Props> = ({ children }) => {
  return <Context>{children}</Context>;
};

export { useProfileVM };
