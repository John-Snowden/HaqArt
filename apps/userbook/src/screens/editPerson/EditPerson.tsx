"use client";

import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { ROUTES } from "@/constants";
import { UIButton, UISep } from "@/ui";
import { translations } from "@/localize";
import { useEditPersonVM } from "@/context";

import {
  Contacts,
  BasicInfo,
  CaseCardsList,
  CallsList,
  AppointmentsList,
} from "./components";
import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";

export const EditPersonScreen = observer(() => {
  const {
    name,
    isUpdateMode,
    upsertPerson,
    deletePerson,
    getRelatedData,
    root: {
      routerStore,
      authStore: { isDev },
    },
    casesModule: { isShowCases },
  } = useEditPersonVM();

  useEffect(() => {
    getRelatedData();
  }, [getRelatedData]);

  return (
    <div className={stylesGlobal.row}>
      <div className={stylesGlobal.flexAllVertical}>
        <div>
          <div className={stylesGlobal.header}>
            <h1>{name || translations.headers.newPerson}</h1>
            <UISep />
            <UIButton title={translations.bttns.save} onClick={upsertPerson} />
            {isDev && isUpdateMode && (
              <UIButton
                title={translations.bttns.delete}
                icon="/svg/delete.svg"
                iconSize={26}
                onClick={() => {
                  deletePerson();
                  routerStore.replace(ROUTES.PERSONS_LIST);
                }}
              />
            )}
          </div>

          <BasicInfo />
          <UISep times={2} />
          <Contacts />
        </div>

        <UISep />
        <div className={stylesGlobal.flexAllVertical}>
          {isShowCases && <CaseCardsList />}
        </div>
      </div>

      <div className={styles.sepVertical} />

      <div className={stylesGlobal.flexAllVertical}>
        <UISep times={0.5} />
        <CallsList />
        <UISep />
        <div className={styles.sepHorizontal} />
        <UISep />
        <AppointmentsList />
      </div>
    </div>
  );
});
