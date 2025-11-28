"use client";

import { OriginsListScreen } from "@/screens";
import { OriginsListContext } from "@/context";

export default function OriginsList() {
  return (
    <OriginsListContext>
      <OriginsListScreen />
    </OriginsListContext>
  );
}
