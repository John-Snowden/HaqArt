"use client";

import { EditOpponentScreen } from "@/screens";
import { EditOpponentContext } from "@/context";

const EditOpponent = () => {
  return (
    <EditOpponentContext>
      <EditOpponentScreen />
    </EditOpponentContext>
  );
};

export default EditOpponent;
