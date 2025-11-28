"use client";

import { EditCaseScreen } from "@/screens";
import { EditCaseContext } from "@/context";

const EditCase = () => {
  return (
    <EditCaseContext>
      <EditCaseScreen />
    </EditCaseContext>
  );
};

export default EditCase;
