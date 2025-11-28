import { FC } from "react";
import { observer } from "mobx-react-lite";

import { Dropdown } from "@/ui";
import { useEditCaseVM } from "@/context";
import { translations } from "@/localize/translations";
import { IMPORTANCE, URGENCY } from "@shared/prisma/prisma/client";
import { IMPORTANCE_OPTIONS, URGENCY_OPTIONS } from "@/stores/constants";

import { PriceSection } from "./PriceSection";

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
      <Dropdown
        disabled={!isSuperRole}
        options={managerOptions}
        value={managerName}
        label={translations.legalCase.managerId}
        onClick={(value) => {
          setManagerId(value);
        }}
      />
      <Dropdown
        isValueRequired
        disabled={!isSuperRole}
        value={caseImportanceTitle}
        label={translations.legalCase.caseImportance}
        options={IMPORTANCE_OPTIONS}
        onClick={(value: string) => setImportance(value as IMPORTANCE)}
      />
      <Dropdown
        isValueRequired
        disabled={!isSuperRole}
        value={caseUrgencyTitle}
        label={translations.legalCase.caseUrgency}
        options={URGENCY_OPTIONS}
        onClick={(value: string) => setCaseUrgency(value as URGENCY)}
      />
      <PriceSection />
    </div>
  );
});
