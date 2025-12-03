"use client";

import { FC } from "react";
import { observer } from "mobx-react-lite";

import {
  REFUSAL_OPTIONS,
  LEGAL_ACTION_OPTIONS,
  STATUS_IN_COURT_OPTIONS,
} from "@/stores/constants";
import {
  CASE_STATUS,
  LEGAL_ACTION,
  REFUSAL_REASON,
  STATUS_IN_COURT,
} from "@shared/prisma/prisma/client";
import { UIDropdown } from "@/ui";
import { translations } from "@/localize";
import { useEditCaseVM } from "@/context";

export const Dropdowns: FC = observer(() => {
  const {
    caseStatus,
    legalAction,
    statusInCourt,
    refusalReason,
    permittedCaseStatuses,
    setCaseStatus,
    setLegalAction,
    setStatusInCourt,
    setRefusalReason,
  } = useEditCaseVM();

  const legalActionTitle = legalAction
    ? translations.legalActions[legalAction]
    : "-";

  const statusInCourtTitle = statusInCourt
    ? translations.statusesInCourt[statusInCourt]
    : "-";

  const caseStatusTitle = translations.caseStatuses[caseStatus];

  return (
    <div>
      <UIDropdown
        value={legalActionTitle}
        options={LEGAL_ACTION_OPTIONS}
        label={translations.legalCase.legalAction}
        onClick={(value) => {
          setLegalAction(
            value === "none" ? undefined : (value as LEGAL_ACTION),
          );
        }}
      />
      <UIDropdown
        value={statusInCourtTitle}
        options={STATUS_IN_COURT_OPTIONS}
        label={translations.legalCase.statusInCourt}
        onClick={(value) => {
          setStatusInCourt(
            value === "none" ? undefined : (value as STATUS_IN_COURT),
          );
        }}
      />
      <UIDropdown
        isValueRequired
        value={caseStatusTitle}
        options={permittedCaseStatuses}
        label={translations.legalCase.caseStatus}
        onClick={(value: string) => setCaseStatus(value as CASE_STATUS)}
      />
      <div>
        {caseStatus === CASE_STATUS.PERSON_REFUSED && (
          <UIDropdown
            value={refusalReason}
            options={REFUSAL_OPTIONS}
            label={translations.legalCase.refusalReason}
            onClick={(value) => {
              setRefusalReason(
                value === "none" ? undefined : (value as REFUSAL_REASON),
              );
            }}
          />
        )}
      </div>
    </div>
  );
});
