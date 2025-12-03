"use client";

import { format } from "date-fns";
import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { translations } from "@/localize";
import { UIListWrapper, UIIcon } from "@/ui";
import { ROUTES } from "@/constants/routes";
import { usePersonsListVM } from "@/context";

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
        const { id, name, phoneNumber, createdAt, author } = person;
        const date = format(createdAt, "d MMMM HH:mm", { locale: ru });

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
            <div className={`${stylesGlobal.tableColumn}`}>
              {phoneNumber || "-"}
            </div>
            <div className={`${stylesGlobal.tableColumn}`}>
              {author.username}
            </div>
            <div className={stylesGlobal.tableColumn}>{date}</div>
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
