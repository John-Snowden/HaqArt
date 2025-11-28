"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { UIButton, UIInput } from "@/ui";
import { translations } from "@/localize";
import { useEditCaseVM } from "@/context";

import styles from "../styles.module.css";

export const OpponentSection = observer(() => {
  const {
    opponentId,
    foundOpponents,
    opponentSearchText,
    gotoOpponent,
    setOpponentId,
    setOponentSearchText,
    root: {
      opponentsStore: { getOpponents },
    },
  } = useEditCaseVM();

  useEffect(() => {
    getOpponents();
  }, [getOpponents]);

  const renderItems = () => {
    return foundOpponents.map((opponent) => {
      return (
        <div
          role="button"
          key={opponent.id}
          className={styles.opponentBttn}
          onClick={() => {
            setOpponentId(opponent.id);
            setOponentSearchText(opponent.name);
          }}
        >
          {opponent.name}
        </div>
      );
    });
  };

  return (
    <>
      <div className={clsx(styles.inputGroup, styles.flexStart)}>
        <h4
          style={{
            display: "flex",
            paddingTop: "15px",
            paddingRight: "24px",
          }}
        >
          {translations.headers.opponent}
        </h4>
        <div className={styles.searchWrapper}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <UIInput
              value={opponentSearchText}
              onChange={(value) => {
                setOpponentId(undefined);
                setOponentSearchText(value);
              }}
            />
            {opponentId !== undefined && (
              <UIButton
                iconSize={16}
                icon={"/svg/link.svg"}
                style={styles.iconBttn}
                onClick={gotoOpponent}
              />
            )}
          </div>
          {opponentId == undefined && (
            <div className={styles.suggestionsWrapper}>{renderItems()}</div>
          )}
        </div>
      </div>
    </>
  );
});
