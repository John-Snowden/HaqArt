"use client";

import { observer } from "mobx-react-lite";

import {
  PERSON_CALL_OPTIONS,
  PERSON_CATEGORY_OPTIONS,
} from "@/stores/constants";
import { translations } from "@/localize";
import { UIDropdown, UIIcon } from "@/ui";
import { usePersonsListVM } from "@/context";

import styles from "./styles.module.css";

export const Filters = observer(() => {
  const {
    originsFilterModule: {
      originIdFilter,
      personOriginOptions,
      setOriginFilter,
    },
    callsFilterModule: { callsFilter, setCallsFilter },
    casesFilterModule: { categoryFilter, setCategoryFilter },
  } = usePersonsListVM();

  const callsFilterTitle =
    PERSON_CALL_OPTIONS.find((o) => o.option === callsFilter)?.value ||
    translations.misc.all;

  const originsFilterTitle =
    personOriginOptions.find((o) => o.option === String(originIdFilter))
      ?.value || translations.misc.all;

  const categoryFilterTitle = categoryFilter
    ? translations.categories[categoryFilter]
    : translations.misc.all;

  return (
    <div className={styles.personFiltersWrapper}>
      <h1 className={styles.filterHeader}>Фильтры:</h1>

      <div className={styles.filterWrapper}>
        <div className={styles.filterWrapperTop}>
          <h4 className={styles.searchFilterTitle}>
            {translations.filters.calls}
          </h4>
          <div style={{ position: "absolute", top: 0, right: "22px" }}>
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
      <div className={styles.sepVerticalFilter} />

      <div className={styles.filterWrapper}>
        <div className={styles.filterWrapperTop}>
          <h4 className={styles.searchFilterTitle}>
            {translations.filters.origin}
          </h4>
          <div style={{ position: "absolute", top: 0, right: "24px" }}>
            <UIIcon size={15} source={"/svg/origin.svg"} />
          </div>
        </div>
        <UIDropdown
          value={originsFilterTitle}
          options={personOriginOptions}
          emptyValue={translations.misc.all}
          onClick={setOriginFilter}
        />
      </div>
      <div className={styles.sepVerticalFilter} />

      <div className={styles.filterWrapper}>
        <div className={styles.filterWrapperTop}>
          <h4 className={styles.searchFilterTitle}>
            {translations.filters.category}
          </h4>
          <div style={{ position: "absolute", top: 0, right: "24px" }}>
            <UIIcon size={15} source={"/svg/category.svg"} />
          </div>
        </div>
        <UIDropdown
          value={categoryFilterTitle}
          options={PERSON_CATEGORY_OPTIONS}
          emptyValue={translations.misc.all}
          onClick={setCategoryFilter}
        />
      </div>
      <div className={styles.sepVerticalFilter} />
    </div>
  );
});
