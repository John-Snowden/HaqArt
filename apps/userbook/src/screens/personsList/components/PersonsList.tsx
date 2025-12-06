"use client";

import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";
import { format, isBefore, isToday, endOfDay } from "date-fns";

import { translations } from "@/localize";
import { ROUTES } from "@/constants/routes";
import { usePersonsListVM } from "@/context";
import { UIListWrapper, UIIcon } from "@/ui";
import { getLastCall } from "@/utils/calls/utils";
import { greenFilter, redFilter } from "@/theme/Colors";
import { CALL_STATUS } from "@shared/prisma/prisma/client";

import stylesGlobal from "../../../stylesGlobal.module.css";

export const PersonsList = observer(() => {
  const {
    persons,
    canWrite,
    isLoading,
    selectPerson,
    getPersons,
    resetSelectedPersonId,
    root: { routerStore },
  } = usePersonsListVM();

  useEffect(() => {
    getPersons();
  }, [getPersons]);

  const renderItems = () => {
    return persons
      .slice()
      .reverse()
      .map((person) => {
        const { id, name, phoneNumber, calls, cases } = person;
        const lastCall = getLastCall(calls);
        const lastCalled = lastCall
          ? format(lastCall.createdAt, "d MMM yyyy, HH:mm", { locale: ru })
          : "-";

        const nextDialDates = cases
          .map((c) => c.nextDialDate)
          .filter((d) => d !== null);
        const sorted = [...nextDialDates].sort(
          (a, b) => a.getTime() - b.getTime(),
        );
        const earliestDialDate = sorted[0];
        const nextCall = earliestDialDate
          ? format(earliestDialDate, "d MMM yyyy, HH:mm", { locale: ru })
          : "-";
        const isBeforeTomorrow =
          Boolean(earliestDialDate) &&
          isBefore(earliestDialDate, endOfDay(new Date()));

        return (
          <div
            key={id}
            className={stylesGlobal.itemWrapper}
            role="button"
            onClick={() => {
              selectPerson(id);
              routerStore.push(ROUTES.EDIT_PERSON);
            }}
          >
            <div className={stylesGlobal.iconWrapper}>
              <UIIcon size={20} source={"/svg/person.svg"} />
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>{name}</div>
            <div
              className={`${stylesGlobal.tableColumn}`}
            >{`${lastCalled}${lastCall?.callStatus === CALL_STATUS.MISSED ? ", " + translations.callStatuses.MISSED : ""}`}</div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {nextCall}
              {isBeforeTomorrow && earliestDialDate && (
                <div
                  style={{
                    marginLeft: 24,
                    filter: isToday(earliestDialDate) ? greenFilter : redFilter,
                  }}
                >
                  <UIIcon source="./svg/lightbulb.svg" size={18} />
                </div>
              )}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {phoneNumber || "-"}
            </div>
            {/*TODO delete?*/}
            {/*<div className={`${stylesGlobal.tableColumn}`}>
              {author.username}
            </div>
            <div className={stylesGlobal.tableColumn}>{date}</div>*/}
            <div className={stylesGlobal.iconWrapper}>
              <UIIcon size={12} source={"/svg/chevronRight.svg"} />
            </div>
          </div>
        );
      });
  };

  return (
    <UIListWrapper
      canWrite={canWrite}
      isLoading={isLoading}
      hasItems={persons.length !== 0}
      bttnTitle={translations.bttns.addPerson}
      onAdd={() => {
        resetSelectedPersonId();
        routerStore.push(ROUTES.EDIT_PERSON);
      }}
    >
      {renderItems()}
    </UIListWrapper>
  );
});
