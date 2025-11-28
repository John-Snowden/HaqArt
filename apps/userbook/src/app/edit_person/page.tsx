"use client";

import { EditPersonScreen } from "@/screens";
import { EditPersonContext } from "@/context";

const EditPerson = () => {
  return (
    <EditPersonContext>
      <EditPersonScreen />
    </EditPersonContext>
  );
};

export default EditPerson;
