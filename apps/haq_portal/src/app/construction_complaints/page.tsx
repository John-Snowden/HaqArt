"use client";

import { ConstructionComplaintsScreen } from "@/screens";
import { ConstructionComplaintsContext } from "@/context";

import stylesGlobal from "../../stylesGlobal.module.css";

export default function ConstructionComplaints() {
  return (
    <ConstructionComplaintsContext>
      <div className={stylesGlobal.window}>
        <ConstructionComplaintsScreen />
      </div>
    </ConstructionComplaintsContext>
  );
}
