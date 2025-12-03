"use client";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { ROUTES } from "@/constants";
import { UIButton, UIIcon, UISep } from "@/ui";
import { translations } from "@/localize";
import { useEditPersonVM } from "@/context";

import styles from "../styles.module.css";
import stylesGlobal from "../../../stylesGlobal.module.css";

export const CaseCardsList = observer(() => {
  const {
    setSelectedCaseId,
    resetSelectedCaseId,
    root: {
      routerStore,
      casesStore: { cases },
    },
  } = useEditPersonVM();

  const renderCasesCards = () => {
    return cases.map((c) => (
      <div
        key={c.id}
        className={styles.caseCard}
        role="button"
        onClick={() => {
          setSelectedCaseId(c.id);
          routerStore.push(ROUTES.EDIT_CASE);
        }}
      >
        <div className={styles.cardBG} />

        <div style={{ display: "flex" }}>
          <UIIcon size={20} source="./svg/case.svg" />
          <h3 className={styles.cardElementTop}>{c.opponent?.name}</h3>
        </div>

        <div className={styles.cardElementCenter}>
          <div>
            {c.categories.map((k) => translations.categories[k]).join(", ")}
          </div>
          <div className={styles.sepHorizontalCard} />
          <div>{translations.caseStatuses[c.caseStatus]}</div>
        </div>

        <h4 className={styles.cardElementFooter}>
          {format(c.createdAt, "d MMM yyyy", { locale: ru })}
        </h4>
      </div>
    ));
  };

  return (
    <div>
      <UISep />
      {cases.length !== 0 && (
        <>
          <h1>{translations.headers.cases}</h1>
          <UISep times={0.5} />
          <div className={stylesGlobal.row}>{renderCasesCards()}</div>
          <UISep />
        </>
      )}
      <UIButton
        title={translations.bttns.addCase}
        onClick={() => {
          resetSelectedCaseId();
          routerStore.push(ROUTES.EDIT_CASE);
        }}
      />
    </div>
  );
});
