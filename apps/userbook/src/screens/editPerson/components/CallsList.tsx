"use client";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { ROUTES } from "@/constants";
import { translations } from "@/localize";
import { useEditPersonVM } from "@/context";
import { UIButton, UIIcon, UISep } from "@/ui";
import { CALL_STATUS } from "@shared/prisma/prisma/client";

import styles from "../styles.module.css";
import stylesGlobal from "../../../stylesGlobal.module.css";

export const CallsList = observer(() => {
  const {
    root: {
      casesStore: { cases },
      callsStore: { calls },
      routerStore: { router },
    },
    callsModule: { setSelectedCallId, resetSelectedCallId, setSelectedCaseId },
  } = useEditPersonVM();

  const renderCallsGroups = () => {
    return cases.map((c) => {
      const callGroupTitle = `${translations.misc.case}
        ${translations.misc.asOf}
        ${format(c.createdAt, "d MMM yyyy", { locale: ru })}, ${c.opponent?.name}:`;

      return (
        <div key={c.id} className={stylesGlobal.flexAllVertical}>
          <h3>{callGroupTitle}</h3>
          <UISep times={0.5} />
          <div className={stylesGlobal.row}>
            <div style={{ marginRight: "12px" }}>
              <UIButton
                title={translations.bttns.newCall}
                onClick={() => {
                  resetSelectedCallId();
                  setSelectedCaseId(c.id);
                  router.push(ROUTES.EDIT_CALL);
                }}
              />
            </div>
            <div className={styles.scrollX}>{renderCalls(c.id) || "-"}</div>
            <div className={styles.nextDialWrapper}>
              <div>{translations.misc.nextDialDate}</div>
              <div>
                {c.nextDialDate
                  ? format(c.nextDialDate, "dd MMM yyyy, HH:mm", { locale: ru })
                  : "none"}
              </div>
            </div>
          </div>
          <UISep />
        </div>
      );
    });
  };

  const renderCalls = (caseId: number) => {
    return calls
      .filter((call) => call.caseId === caseId)
      .reverse()
      .map((call) => {
        return (
          <div
            key={call.id}
            className={styles.callCard}
            onClick={() => {
              setSelectedCaseId(caseId);
              setSelectedCallId(call.id);
              router.push(ROUTES.EDIT_CALL);
            }}
          >
            <div style={{ marginRight: "12px" }}>
              <UIIcon
                size={20}
                source={
                  call.callStatus === CALL_STATUS.DONE
                    ? "./svg/callReceived.svg"
                    : "./svg/callMissed.svg"
                }
              />
            </div>
            {format(call.createdAt, "d MMM yyyy, HH:mm", { locale: ru })}
            <div className={styles.cardBG} />
          </div>
        );
      });
  };

  return (
    <div>
      <h1>{translations.headers.calls}</h1>
      <UISep />
      <div className={stylesGlobal.flexAllVertical}>{renderCallsGroups()}</div>
    </div>
  );
});
