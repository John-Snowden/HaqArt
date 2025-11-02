"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useEditUserVM } from "@/app/edit_user/page";
import { userFieldLabels } from "@/constants/writableInputFields";
import { UIDateTimeInput } from "@/ui/dateTimeInput/UIDateTimeInput";

import styles from "../styles.module.css";

export const CourtInfo = observer(() => {
  const { courtInfo, timeOfPerformance, setCourtInfo, setTimeOfPerformance } =
    useEditUserVM();

  return (
    <div className={styles.inputGroup}>
      <div style={{ width: "66vw" }}>
        <UIInput
          type="text"
          label={userFieldLabels.courtInfo}
          value={courtInfo}
          style={styles.input}
          placeholder={"..."}
          onChange={setCourtInfo}
        />
      </div>
      <div style={{ width: "35vw" }}>
        <UIDateTimeInput
          label={userFieldLabels.timeOfPerformance}
          value={timeOfPerformance}
          onChange={(value) => {
            setTimeOfPerformance(value ? new Date(value) : value);
          }}
        />
      </div>
    </div>
  );
});
