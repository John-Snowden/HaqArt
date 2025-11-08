import { FC } from "react";
import { observer } from "mobx-react-lite";

import { Dropdown } from "@/ui/dropdown/UIDropdown";
import { useEditUserVM } from "@/app/edit_user/page";
import { userFieldLabels } from "@/constants/writableInputFields";
import { TASK_IMPORTANCE, TASK_URGENCY } from "@shared/prisma/prisma/client";

import {
  taskUrgencyOptions,
  taskImportanceOptions,
} from "../constants/dropdownOptions";
import { PriceSection } from "./PriceSection";

export const SuperRoleDropdowns: FC = observer(() => {
  const {
    managerId,
    taskUrgency,
    isSuperRole,
    taskImportance,
    managerOptions,
    setManagerId,
    setImportance,
    setTaskUrgency,
  } = useEditUserVM();

  return (
    <>
      <div style={{ width: "26vw", marginTop: "14px" }}>
        <Dropdown
          disabled={!isSuperRole}
          label={userFieldLabels.managerId}
          value={String(managerId) || ""}
          options={managerOptions}
          onClick={(value) => {
            setManagerId(value);
          }}
        />
      </div>
      <div style={{ width: "26vw" }}>
        <Dropdown
          disabled={!isSuperRole}
          label={userFieldLabels.taskImportance}
          value={taskImportance}
          options={taskImportanceOptions}
          onClick={(value: string) => {
            setImportance(value as TASK_IMPORTANCE);
          }}
        />
      </div>
      <div style={{ width: "26vw" }}>
        <Dropdown
          disabled={!isSuperRole}
          label={userFieldLabels.taskUrgency}
          value={taskUrgency}
          options={taskUrgencyOptions}
          onClick={(value: string) => {
            setTaskUrgency(value as TASK_URGENCY);
          }}
        />
      </div>
      <PriceSection />
    </>
  );
});
