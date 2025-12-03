"use client";

import { observer } from "mobx-react-lite";

import {
  URGENCY_OPTIONS,
  IMPORTANCE_OPTIONS,
  ALL_CASE_STATUS_OPTIONS,
} from "@/stores/constants";
import { UIDropdown, UIIcon } from "@/ui";
import { translations } from "@/localize";
import { useCasesListVM } from "@/context";
import { capitalizeName } from "@shared/utils";

import styles from "../styles.module.css";

export const Filters = observer(() => {
  const {
    caseFilters,
    managerOptions,
    setFilterManagerId,
    setFilterCaseStatus,
    setFilterCaseUrgency,
    setFilterCaseImportance,
    root: {
      authStore: { isSuperRole },
      employeesStore: { employees },
    },
  } = useCasesListVM();

  const filterManager = employees.find((e) => e.id === caseFilters.managerId);
  const filterCaseStatus = caseFilters.caseStatus
    ? translations.caseStatuses[caseFilters.caseStatus]
    : translations.misc.all;
  const filterCaseUrgency = caseFilters.caseUrgency
    ? translations.urgency[caseFilters.caseUrgency]
    : translations.misc.all;
  const filterCaseImportance = caseFilters.caseImportance
    ? translations.importance[caseFilters.caseImportance]
    : translations.misc.all;

  return (
    <div className={styles.caseFiltersWrapper}>
      <h1 className={styles.filterHeader}>Фильтры:</h1>
      {isSuperRole && (
        <div className={styles.filterWrapper}>
          <div className={styles.filterWrapperTop}>
            <h4 className={styles.searchFilterTitle}>
              {translations.legalCase.managerId}
            </h4>
            <div style={{ position: "absolute", top: 0, right: "22px" }}>
              <UIIcon size={18} source={"/svg/manager.svg"} />
            </div>
          </div>
          <UIDropdown
            options={managerOptions}
            emptyValue={translations.misc.all}
            value={
              filterManager?.username
                ? capitalizeName(filterManager.username)
                : translations.misc.all
            }
            onClick={setFilterManagerId}
          />
        </div>
      )}

      <div className={styles.sepVerticalFilter} />

      <div className={styles.filterWrapper}>
        <div className={styles.filterWrapperTop}>
          <h4 className={styles.searchFilterTitle}>
            {translations.legalCase.caseStatus}
          </h4>
          <div style={{ position: "absolute", top: 0, right: "24px" }}>
            <UIIcon size={14} source={"/svg/pen.svg"} />
          </div>
        </div>
        <UIDropdown
          value={filterCaseStatus}
          options={ALL_CASE_STATUS_OPTIONS}
          emptyValue={translations.misc.all}
          onClick={setFilterCaseStatus}
        />
      </div>

      <div className={styles.sepVerticalFilter} />

      <div className={styles.filterWrapper}>
        <div className={styles.filterWrapperTop}>
          <h4 className={styles.searchFilterTitle}>
            {translations.legalCase.caseUrgency}
          </h4>
          <div style={{ position: "absolute", top: 0, right: "18px" }}>
            <UIIcon size={24} source={"/svg/caseUrgency.svg"} />
          </div>
        </div>
        <UIDropdown
          value={filterCaseUrgency}
          options={URGENCY_OPTIONS}
          emptyValue={translations.misc.all}
          onClick={setFilterCaseUrgency}
        />
      </div>

      <div className={styles.sepVerticalFilter} />

      <div className={styles.filterWrapper}>
        <div className={styles.filterWrapperTop}>
          <h4 className={styles.searchFilterTitle}>
            {translations.legalCase.caseImportance}
          </h4>
          <div style={{ position: "absolute", top: 0, right: "20px" }}>
            <UIIcon size={20} source={"/svg/dollar.svg"} />
          </div>
        </div>
        <UIDropdown
          value={filterCaseImportance}
          options={IMPORTANCE_OPTIONS}
          emptyValue={translations.misc.all}
          onClick={setFilterCaseImportance}
        />
      </div>
    </div>
  );
});
