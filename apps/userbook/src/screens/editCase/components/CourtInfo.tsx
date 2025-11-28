"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useEditCaseVM } from "@/context";
import { translations } from "@/localize/translations";
import { UIDateTimeInput } from "@/ui/dateTimeInput/UIDateTimeInput";

import styles from "../styles.module.css";

export const CourtInfo = observer(() => {
  const { courtInfo, timeOfPerformance, setCourtInfo, setTimeOfPerformance } =
    useEditCaseVM();

  return (
    <div className={styles.inputGroup}>
      <div style={{ flex: 1 }}>
        <UIInput
          value={courtInfo}
          style={styles.input}
          label={translations.legalCase.courtInfo}
          onChange={setCourtInfo}
        />
      </div>
      <div style={{ width: "fit-content" }}>
        <UIDateTimeInput
          value={timeOfPerformance}
          label={translations.legalCase.timeOfPerformance}
          onChange={(value) => {
            setTimeOfPerformance(value ? new Date(value) : value);
          }}
        />
      </div>
    </div>
  );
});
