"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useEditCaseVM } from "@/context";
import { translations } from "@/localize/translations";
import { UIDateTimeInput } from "@/ui/dateTimeInput/UIDateTimeInput";

import styles from "../styles.module.css";

export const NearestTaskSection = observer(() => {
  const {
    nearestTask,
    nearestTaskDeadline,
    setNearestTask,
    setNearestTaskDeadline,
  } = useEditCaseVM();

  return (
    <div className={styles.inputGroup}>
      <div style={{ flex: 1 }}>
        <UIInput
          value={nearestTask}
          style={styles.input}
          key={translations.legalCase.nearestTask}
          label={translations.legalCase.nearestTask}
          onChange={setNearestTask}
        />
      </div>

      <div style={{ width: "fit-content" }}>
        <UIDateTimeInput
          label={translations.legalCase.nearestTaskDeadline}
          value={nearestTaskDeadline}
          onChange={(value) => {
            setNearestTaskDeadline(value ? new Date(value) : value);
          }}
        />
      </div>
    </div>
  );
});
