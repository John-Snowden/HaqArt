"use client";

import { CasesListScreen } from "@/screens";
import { CasesListContext } from "@/context";

const CasesList = () => {
  return (
    <CasesListContext>
      <CasesListScreen />
    </CasesListContext>
  );
};
export default CasesList;
