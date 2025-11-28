"use client";

import { EditOriginScreen } from "@/screens";
import { EditOriginContext } from "@/context";

const EditOrigin = () => {
  return (
    <EditOriginContext>
      <EditOriginScreen />
    </EditOriginContext>
  );
};

export default EditOrigin;
