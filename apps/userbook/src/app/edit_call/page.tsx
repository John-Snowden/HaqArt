"use client";

import { EditCallContext } from "@/context";
import { EditCallScreen } from "@/screens/editCall";

const EditCall = () => {
  return (
    <EditCallContext>
      <EditCallScreen />
    </EditCallContext>
  );
};

export default EditCall;
