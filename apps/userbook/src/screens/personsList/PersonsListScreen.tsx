"use client";

import { observer } from "mobx-react-lite";

import { translations } from "@/localize";
import { usePersonsListVM } from "@/context";

import styles from "./styles.module.css";
import { Filters, PersonsList } from "./components";
import stylesGlobal from "../../stylesGlobal.module.css";

export const PersonsListScreen = observer(() => {
  const { personsOriginTitle } = usePersonsListVM();

  return (
    <>
      <div className={stylesGlobal.header}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>{personsOriginTitle || translations.headers.allPersons}</h1>
        </div>
        <div className={styles.filtersWrapper}>
          <Filters />
        </div>
      </div>
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
