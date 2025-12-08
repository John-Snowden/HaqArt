"use client";

import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";
import { format, isBefore, isToday, endOfDay } from "date-fns";

import { translations } from "@/localize";
import { ROUTES } from "@/constants/routes";
import { usePersonsListVM } from "@/context";
import { UIListWrapper, UIIcon } from "@/ui";
import { greenFilter, redFilter } from "@/theme/Colors";

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
        const { id, name, phoneNumber, lastDialDate, nextDialDate } = person;
        const lastCalled = lastDialDate
          ? format(lastDialDate, "d MMM yyyy, HH:mm", { locale: ru })
          : "-";

        const nextCall = nextDialDate
          ? format(nextDialDate, "d MMM yyyy, HH:mm", { locale: ru })
          : "-";
        const isBeforeTomorrow =
          nextDialDate && isBefore(nextDialDate, endOfDay(new Date()));

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
              // TODO
              // ${lastCall?.callStatus === CALL_STATUS.MISSED ? ", " + translations.callStatuses.MISSED : ""}
              className={`${stylesGlobal.tableColumn}`}
            >{`${lastCalled}`}</div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {nextCall}
              {isBeforeTomorrow && nextDialDate && (
                <div
                  style={{
                    marginLeft: 24,
                    filter: isToday(nextDialDate) ? greenFilter : redFilter,
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
