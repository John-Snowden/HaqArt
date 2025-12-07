"use client";

import { observer } from "mobx-react-lite";
import { endOfDay, startOfDay } from "date-fns";

import { UIDateTimeInput } from "@/ui";
import { translations } from "@/localize";
import { usePersonsListVM } from "@/context";

import styles from "./styles.module.css";

export const CalendarFilter = observer(() => {
  const {
    casesFilterModule: {
      lastDialedFrom,
      lastDialedThrough,
      nextDialFrom,
      nextDialThrough,
      setLastDialedFrom,
      setLastDialedThrough,
      setNextDialFrom,
      setNextDialThrough,
    },
  } = usePersonsListVM();

  return (
    <div className={styles.mainFiltersWrapper}>
      <div className={styles.filterWrapper}>
        <UIDateTimeInput
          label={translations.misc.lastDialedFrom}
          value={lastDialedFrom ? startOfDay(lastDialedFrom) : null}
          onChange={setLastDialedFrom}
        />
        <UIDateTimeInput
          label={translations.misc.lastDialedThrough}
          value={lastDialedThrough ? endOfDay(lastDialedThrough) : null}
          onChange={setLastDialedThrough}
        />
      </div>
      <div className={styles.sepVerticalFilter} />
      <div className={styles.filterWrapper}>
        <UIDateTimeInput
          label={translations.misc.nextDialFrom}
          value={nextDialFrom ? startOfDay(nextDialFrom) : null}
          onChange={setNextDialFrom}
        />
        <UIDateTimeInput
          label={translations.misc.nextDialThrough}
          value={nextDialThrough ? endOfDay(nextDialThrough) : null}
          onChange={setNextDialThrough}
        />
      </div>
    </div>
  );
});
