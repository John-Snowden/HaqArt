"use client";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { ROUTES } from "@/constants";
import { UIButton, UISep } from "@/ui";
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
        <h2 className={styles.cardElementTop}>{c.opponent?.name}</h2>
        <div className={styles.cardElementCenter}>
          {c.categories.map((k) => translations.categories[k]).join(", ")}
        </div>
        <h4 className={styles.cardElementFooter}>
          {format(c.createdAt, "d MMMM HH:mm", { locale: ru })}
        </h4>
      </div>
    ));
  };

  return (
    <div>
      <h4>{translations.headers.cases}</h4>
      <UISep times={0.5} />
      <div className={stylesGlobal.row}>{renderCasesCards()}</div>
      <UISep />
      <UIButton
        iconSize={14}
        icon="/svg/add.svg"
        title={translations.bttns.addCase}
        onClick={() => {
          resetSelectedCaseId();
          routerStore.push(ROUTES.EDIT_CASE);
        }}
      />
    </div>
  );
});
