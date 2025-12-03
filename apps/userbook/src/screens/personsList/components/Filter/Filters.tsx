"use client";

import { observer } from "mobx-react-lite";

import { UIDropdown, UIIcon } from "@/ui";
import { translations } from "@/localize";
import { usePersonsListVM } from "@/context";
import { PERSON_CALL_OPTIONS } from "@/stores/constants";

import styles from "./styles.module.css";

export const Filters = observer(() => {
  const {
    callsFilterModule: { callsFilter, setCallsFilter },
  } = usePersonsListVM();

  const callsFilterTitle =
    PERSON_CALL_OPTIONS.find((o) => o.option === callsFilter)?.value ||
    translations.misc.all;

  return (
    <div className={styles.personFiltersWrapper}>
      <h1 className={styles.filterHeader}>Фильтры:</h1>
      <div className={styles.sepVerticalFilter} />
      <div className={styles.filterWrapper}>
        <div className={styles.filterWrapperTop}>
          <h4 className={styles.searchFilterTitle}>
            {translations.filters.calls}
          </h4>
          <div style={{ position: "absolute", top: 0, right: "20px" }}>
            <UIIcon size={16} source={"/svg/callReceived.svg"} />
          </div>
        </div>
        <UIDropdown
          value={callsFilterTitle}
          options={PERSON_CALL_OPTIONS}
          emptyValue={translations.misc.all}
          onClick={setCallsFilter}
        />
      </div>
    </div>
  );
});
