"use client";

import { OpponentsListScreen } from "@/screens";
import { OpponentsListContext } from "@/context";

export default function OpponentsList() {
  return (
    <OpponentsListContext>
      <OpponentsListScreen />
    </OpponentsListContext>
  );
}
