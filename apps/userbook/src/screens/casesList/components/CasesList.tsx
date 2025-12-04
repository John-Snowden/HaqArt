"use client";

import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";
import { format, formatDistanceToNowStrict } from "date-fns";

import { translations } from "@/localize";
import { redFilter } from "@/theme/Colors";
import { useCasesListVM } from "@/context";
import { UIListWrapper, UIIcon } from "@/ui";
import { capitalizeName } from "@shared/utils";
import { URGENCY } from "@shared/prisma/prisma/client";

import stylesGlobal from "../../../stylesGlobal.module.css";

export const CasesList = observer(() => {
  const {
    sortedCases,
    isLoading,
    selectCase,
    getCases,
    root: {
      authStore: { me },
    },
  } = useCasesListVM();

  useEffect(() => {
    if (me) getCases();
  }, [me, getCases]);

  const renderItems = () => {
    return sortedCases
      .slice()
      .reverse()
      .map((c) => {
        const assignmentTime = c.assignmentTime
          ? formatDistanceToNowStrict(c.assignmentTime, {
              addSuffix: true,
              locale: ru,
            })
          : "-";

        return (
          <div
            key={c.id}
            className={stylesGlobal.itemWrapper}
            role="button"
            onClick={() => selectCase(c.id)}
          >
            <div className={stylesGlobal.iconWrapper}>
              <UIIcon source={"/svg/case.svg"} size={20} />
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>{c.person.name}</div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {c.problemShort || "-"}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {c.nearestTask || "-"}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {c.nearestTaskDeadline
                ? format(c.nearestTaskDeadline, "d MMM HH:mm", {
                    locale: ru,
                  })
                : "-"}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {translations.urgency[c.caseUrgency]}
              {c.caseUrgency === URGENCY.FIVE && (
                <div
                  style={{
                    marginLeft: 24,
                    filter: redFilter,
                  }}
                >
                  <UIIcon source="/svg/lightBulb.svg" size={18} />
                </div>
              )}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {c.manager?.username ? capitalizeName(c.manager?.username) : "-"}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {c.opponent?.name || "-"}
            </div>
            <div className={stylesGlobal.tableColumn}>{assignmentTime}</div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {translations.caseStatuses[c.caseStatus]}
            </div>

            <div className={stylesGlobal.iconWrapper}>
              <UIIcon source={"/svg/chevronRight.svg"} size={12} />
            </div>
          </div>
        );
      });
  };

  return (
    <UIListWrapper isLoading={isLoading} hasItems={sortedCases.length !== 0}>
      {renderItems()}
    </UIListWrapper>
  );
});
