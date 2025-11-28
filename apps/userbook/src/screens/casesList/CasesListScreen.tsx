"use client";

import { observer } from "mobx-react-lite";

import { UISep } from "@/ui";
import { translations } from "@/localize";
import { useCasesListVM } from "@/context";

import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";
import { Search, Filters, CasesList } from "./components";

export const CasesListScreen = observer(() => {
  const {
    unassignedCasesCount,
    root: {
      authStore: { isSuperRole },
    },
  } = useCasesListVM();

  return (
    <>
      <div className={stylesGlobal.header}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 className={stylesGlobal.headerTitle}>
            {translations.headers.myCases}
          </h1>
          {isSuperRole && (
            <h4 className={stylesGlobal.headerSubTitle}>
              {`${translations.misc.noManager} ${unassignedCasesCount}`}
            </h4>
          )}
        </div>
        <div className={styles.filtersWrapper}>
          <Filters />
          <UISep />
          <Search />
        </div>
      </div>

      <div className={stylesGlobal.tableHeader}>
        <h4 className={stylesGlobal.tableColumn}>{translations.person.name}</h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.legalCase.problemShort}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.legalCase.nearestTask}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.legalCase.nearestTaskDeadline}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.legalCase.caseUrgency}
        </h4>

        <h4 className={stylesGlobal.tableColumn}>
          {translations.legalCase.managerId}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.legalCase.opponentId}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.legalCase.assignmentTime}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.legalCase.caseStatus}
        </h4>
      </div>
      <CasesList />
    </>
  );
});
