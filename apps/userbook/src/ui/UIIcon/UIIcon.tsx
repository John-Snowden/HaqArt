"use client";

import { FC } from "react";
import Image from "next/image";

interface Props {
  source: string;
  size?: number;
  isInverted?: boolean;
}

export const UIIcon: FC<Props> = ({ source, size, isInverted }) => {
  return (
    <Image
      src={source}
      alt="icon"
      width={size || 14}
      height={size || 14}
      priority={false}
      style={isInverted ? { filter: "invert(1)" } : undefined}
    />
  );
};
