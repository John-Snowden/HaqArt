"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useEditUserVM } from "@/app/edit_user/page";
import { userFieldLabels } from "@/constants/writableInputFields";
import { UIDateTimeInput } from "@/ui/dateTimeInput/UIDateTimeInput";

import styles from "../styles.module.css";

export const NearestTaskSection = observer(() => {
  const {
    nearestTask,
    nearestTaskDeadline,
    setNearestTask,
    setNearestTaskDeadline,
  } = useEditUserVM();

  return (
    <div className={styles.inputGroup}>
      <div style={{ width: "66vw" }}>
        <UIInput
          key={userFieldLabels.nearestTask}
          type="text"
          label={userFieldLabels.nearestTask}
          value={nearestTask || ""}
          style={styles.input}
          placeholder={"..."}
          onChange={setNearestTask}
        />
      </div>

      <div style={{ width: "35vw" }}>
        <UIDateTimeInput
          label={userFieldLabels.nearestTaskDeadline}
          value={nearestTaskDeadline}
          onChange={(value) => {
            setNearestTaskDeadline(value ? new Date(value) : value);
          }}
        />
      </div>
    </div>
  );
});
