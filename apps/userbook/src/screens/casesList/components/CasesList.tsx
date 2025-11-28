"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";
import { format, formatDistanceToNowStrict } from "date-fns";

import { translations } from "@/localize";
import { useCasesListVM } from "@/context";
import { UIListWrapper, UIIcon } from "@/ui";
import { capitalizeName } from "@shared/utils";
import { URGENCY } from "@shared/prisma/prisma/client";

import stylesGlobal from "../../../stylesGlobal.module.css";

export const CasesList = observer(() => {
  const {
    isLoading,
    selectCase,
    getCases,
    filteredCases,
    root: {
      authStore: { me },
    },
  } = useCasesListVM();

  useEffect(() => {
    if (me) getCases();
  }, [me, getCases]);

  const renderItems = () => {
    return filteredCases
      .slice()
      .reverse()
      .map((filteredCase) => {
        const assignmentTime = filteredCase.assignmentTime
          ? formatDistanceToNowStrict(filteredCase.assignmentTime, {
              addSuffix: true,
              locale: ru,
            })
          : "-";

        return (
          <div
            key={filteredCase.id}
            className={stylesGlobal.itemWrapper}
            role="button"
            onClick={() => selectCase(filteredCase.id)}
          >
            <div className={stylesGlobal.iconWrapper}>
              <UIIcon source={"/svg/case.svg"} size={20} />
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {filteredCase.person.name}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {filteredCase.problemShort || "-"}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {filteredCase.nearestTask || "-"}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {filteredCase.nearestTaskDeadline
                ? format(filteredCase.nearestTaskDeadline, "d MMM HH:mm", {
                    locale: ru,
                  })
                : "-"}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {translations.urgency[filteredCase.caseUrgency]}
              {filteredCase.caseUrgency === URGENCY.FIVE && (
                <div
                  style={{
                    marginLeft: 24,
                    filter:
                      "invert(33%) sepia(97%) saturate(7200%) hue-rotate(0deg)",
                  }}
                >
                  <UIIcon source="/svg/lightBulb.svg" size={18} />
                </div>
              )}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {filteredCase.manager?.username
                ? capitalizeName(filteredCase.manager?.username)
                : "-"}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {filteredCase.opponent?.name || "-"}
            </div>
            <div className={stylesGlobal.tableColumn}>{assignmentTime}</div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {translations.caseStatuses[filteredCase.caseStatus]}
            </div>

            <div className={stylesGlobal.iconWrapper}>
              <UIIcon source={"/svg/chevronRight.svg"} size={12} />
            </div>
          </div>
        );
      });
  };

  return (
    <UIListWrapper isLoading={isLoading} hasItems={filteredCases.length !== 0}>
      {renderItems()}
    </UIListWrapper>
  );
});
