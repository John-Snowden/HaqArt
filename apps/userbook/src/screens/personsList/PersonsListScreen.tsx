"use client";

import { observer } from "mobx-react-lite";

import { translations } from "@/localize";
import { usePersonsListVM } from "@/context";

import { PersonsList } from "./components/PersonsList";
import stylesGlobal from "../../stylesGlobal.module.css";

export const PersonsListScreen = observer(() => {
  const { personsOriginTitle } = usePersonsListVM();

  return (
    <>
      <h1 className={stylesGlobal.header}>{personsOriginTitle}</h1>
      <div className={stylesGlobal.tableHeader}>
        <h4 className={stylesGlobal.tableColumn}>{translations.person.name}</h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.person.phoneNumber}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.person.authorId}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.misc.createdAt}
        </h4>
      </div>

      <PersonsList />
    </>
  );
});
