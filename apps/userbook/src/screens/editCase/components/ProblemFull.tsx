"use client";

import { observer } from "mobx-react-lite";

import { UITextarea } from "@/ui";
import { useEditCaseVM } from "@/context";

export const ProblemFull = observer(() => {
  const { problemFull, setProblemFull } = useEditCaseVM();

  return (
    <UITextarea rowsCount={16} value={problemFull} onChange={setProblemFull} />
  );
});
