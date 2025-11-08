"use client";

import { FC } from "react";
import { observer } from "mobx-react-lite";

import {
  TASK_STATUS,
  LEGAL_ACTION,
  REFUSAL_REASON,
  STATUS_IN_COURT,
} from "@shared/prisma/prisma/client";
import { Dropdown } from "@/ui/dropdown/UIDropdown";
import { useEditUserVM } from "@/app/edit_user/page";
import { userFieldLabels } from "@/constants/writableInputFields";

import {
  refusalOptions,
  legalActionsOptions,
  statusInCourtOptions,
} from "../constants/dropdownOptions";
import styles from "../styles.module.css";

export const Dropdowns: FC = observer(() => {
  const {
    taskStatus,
    legalAction,
    statusInCourt,
    refusalReason,
    availableStatusOptions,
    setTaskStatus,
    setLegalAction,
    setStatusInCourt,
    setRefusalReason,
  } = useEditUserVM();

  return (
    <div className={styles.inputGroupColumn}>
      <div style={{ width: "26vw" }}>
        <Dropdown
          label={userFieldLabels.taskStatus}
          value={taskStatus}
          options={availableStatusOptions}
          onClick={(value: string) => {
            setTaskStatus(value as TASK_STATUS);
          }}
        />
        {taskStatus === TASK_STATUS.leadRefused && (
          <>
            <div style={{ width: "26vw" }}>
              <Dropdown
                label={userFieldLabels.refusalReason}
                value={refusalReason || ""}
                options={refusalOptions}
                onClick={(value) => {
                  setRefusalReason(value as REFUSAL_REASON);
                }}
              />
            </div>
            <div className={styles.sep} />
          </>
        )}
        <div style={{ width: "26vw" }}>
          <Dropdown
            label={userFieldLabels.legalAction}
            value={legalAction || ""}
            options={legalActionsOptions}
            onClick={(value) => {
              setLegalAction(value as LEGAL_ACTION);
            }}
          />
        </div>
        <div style={{ width: "26vw" }}>
          <Dropdown
            label={userFieldLabels.statusInCourt}
            value={statusInCourt || ""}
            options={statusInCourtOptions}
            onClick={(value) => {
              setStatusInCourt(value as STATUS_IN_COURT);
            }}
          />
        </div>
      </div>
    </div>
  );
});
