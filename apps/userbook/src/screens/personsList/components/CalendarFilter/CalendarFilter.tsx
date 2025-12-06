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
      setLastDialedFrom,
      setlastDialedThrough,
    },
  } = usePersonsListVM();

  return (
    <div className={styles.calendarFiltersWrapper}>
      <UIDateTimeInput
        label={translations.misc.lastDialedFrom}
        value={lastDialedFrom ? startOfDay(lastDialedFrom) : null}
        onChange={setLastDialedFrom}
      />
      <UIDateTimeInput
        label={translations.misc.lastDialedThrough}
        value={lastDialedThrough ? endOfDay(lastDialedThrough) : null}
        onChange={setlastDialedThrough}
      />
    </div>
  );
});
