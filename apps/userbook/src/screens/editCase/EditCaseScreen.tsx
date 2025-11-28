"use client";

import clsx from "clsx";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { translations } from "@/localize";
import { useEditCaseVM } from "@/context";
import { UIButton, UISep, UICategories } from "@/ui";

import {
  CourtInfo,
  Dropdowns,
  ProblemFull,
  ProblemShort,
  NearestTaskSection,
  SupervisorDropdowns,
  OpponentSection,
} from "./components";
import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";

export const EditCaseScreen = observer(() => {
  const {
    canWrite,
    managerId,
    categories,
    upsertCase,
    setCategories,
    root: {
      casesStore: { selectedCase },
    },
  } = useEditCaseVM();

  const headerTitle = `${selectedCase?.person.name} ${
    selectedCase?.person.phoneNumber
      ? ", +(998) " + selectedCase?.person.phoneNumber
      : ""
  }`;

  const date = selectedCase?.createdAt || new Date();
  const subheaderTitle = `${translations.misc.case} ${translations.misc.asOf} ${format(date, "dd MMM yyyy", { locale: ru })}`;

  return (
    <>
      <div className={clsx(stylesGlobal.header, stylesGlobal.row)}>
        <div>
          <h1>{headerTitle}</h1>
          <h4 style={{ marginTop: "6px" }}>{subheaderTitle}</h4>
        </div>
        <UISep />
        <div style={{ marginBottom: "6px" }}>
          <UIButton
            iconSize={14}
            icon="/svg/add.svg"
            title={translations.bttns.save}
            onClick={() => {
              if (canWrite) upsertCase();
            }}
          />
        </div>
      </div>

      <UISep />
      <div className={clsx(stylesGlobal.row, styles.flexStart)}>
        <div style={{ width: "65%" }}>
          <div className={styles.dullGray}>Шаг 1: первичные данные</div>
          <div style={{ width: "60%" }}>
            <ProblemShort />
          </div>
          <div style={{ width: "60%" }}>
            <OpponentSection />
          </div>
          <UISep times={0.5} />
          <UICategories
            canWrite={canWrite}
            selectedCategories={categories}
            updateCategories={setCategories}
          />
          <UISep times={4} />
          <ProblemFull />

          <UISep />
          <NearestTaskSection />
          <CourtInfo />
        </div>

        <div className={styles.sepVertical} />

        <div style={{ width: "30%", flexDirection: "column" }}>
          <div className={styles.dullGray}>
            Шаг 2: Заполняется руководителем
          </div>
          <SupervisorDropdowns />

          <UISep times={4} />
          {managerId !== undefined && (
            <div style={{ width: "100%", flexDirection: "column" }}>
              <div className={styles.dullGray}>
                Шаг 3: заполняется исполнителем
              </div>
              <Dropdowns />
            </div>
          )}
        </div>
      </div>
    </>
  );
});
