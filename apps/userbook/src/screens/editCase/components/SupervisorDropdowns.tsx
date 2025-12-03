import { FC } from "react";
import { observer } from "mobx-react-lite";

import { UIDropdown } from "@/ui";
import { useEditCaseVM } from "@/context";
import { capitalizeName } from "@shared/utils";
import { translations } from "@/localize/translations";
import { IMPORTANCE, URGENCY } from "@shared/prisma/prisma/client";
import { IMPORTANCE_OPTIONS, URGENCY_OPTIONS } from "@/stores/constants";

export const SupervisorDropdowns: FC = observer(() => {
  const {
    managerId,
    caseUrgency,
    caseImportance,
    setManagerId,
    setImportance,
    setCaseUrgency,
    managerOptions,
    root: {
      authStore: { isSuperRole },
      employeesStore: { employees },
    },
  } = useEditCaseVM();

  const managerName =
    employees.find((e) => e.id === managerId)?.username || "-";
  const caseImportanceTitle = translations.importance[caseImportance];
  const caseUrgencyTitle = translations.urgency[caseUrgency];

  return (
    <div>
      <UIDropdown
        disabled={!isSuperRole}
        options={managerOptions}
        value={capitalizeName(managerName)}
        label={translations.legalCase.managerId}
        onClick={(value) => {
          setManagerId(value);
        }}
      />
      <UIDropdown
        isValueRequired
        disabled={!isSuperRole}
        value={caseImportanceTitle}
        label={translations.legalCase.caseImportance}
        options={IMPORTANCE_OPTIONS}
        onClick={(value: string) => setImportance(value as IMPORTANCE)}
      />
      <UIDropdown
        isValueRequired
        disabled={!isSuperRole}
        value={caseUrgencyTitle}
        label={translations.legalCase.caseUrgency}
        options={URGENCY_OPTIONS}
        onClick={(value: string) => setCaseUrgency(value as URGENCY)}
      />
    </div>
  );
});
