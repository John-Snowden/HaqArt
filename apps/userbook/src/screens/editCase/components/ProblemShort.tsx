"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useEditCaseVM } from "@/context";
import { translations } from "@/localize/translations";

import styles from "../styles.module.css";

export const ProblemShort = observer(({}) => {
  const { problemShort, setProblemShort } = useEditCaseVM();

  return (
    <UIInput
      style={styles.input}
      value={problemShort}
      label={translations.legalCase.problemShort}
      onChange={setProblemShort}
    />
  );
});
