"use client";

import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { ROUTES } from "@/constants";
import { UIButton, UISep } from "@/ui";
import { translations } from "@/localize";
import { useEditPersonVM } from "@/context";

import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";
import { Contacts, BasicInfo, CaseCardsList } from "./components";

export const EditPersonScreen = observer(() => {
  const {
    name,
    isUpdateMode,
    isShowCases,
    upsertPerson,
    deletePerson,
    getPersonalCases,
    root: {
      routerStore,
      authStore: { isDev },
    },
  } = useEditPersonVM();

  useEffect(() => {
    getPersonalCases();
  }, [getPersonalCases]);

  return (
    <>
      <div className={stylesGlobal.header}>
        <h1>{name || translations.headers.newPerson}</h1>
        <UISep />
        <UIButton
          iconSize={14}
          icon="/svg/add.svg"
          title={translations.bttns.save}
          onClick={upsertPerson}
        />
        {isDev && isUpdateMode && (
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <UIButton
              title={translations.bttns.delete}
              icon="/svg/delete.svg"
              iconSize={26}
              onClick={() => {
                deletePerson();
                routerStore.replace(ROUTES.PERSONS_LIST);
              }}
            />
          </div>
        )}
      </div>

      <UISep />
      <form>
        <div className={styles.inputsWrapper}>
          <BasicInfo />
          <UISep times={2} />
          <Contacts />
        </div>

        <UISep />
      </form>

      <div className={stylesGlobal.footer}>
        {isShowCases && <CaseCardsList />}
      </div>
    </>
  );
});
