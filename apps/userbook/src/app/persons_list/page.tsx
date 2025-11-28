"use client";

import { PersonsListScreen } from "@/screens";
import { PersonsListContext } from "@/context";

export default function UsersList() {
  return (
    <PersonsListContext>
      <PersonsListScreen />
    </PersonsListContext>
  );
}
