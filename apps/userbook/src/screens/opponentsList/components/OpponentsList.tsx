"use client";

import { format } from "date-fns";
import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { translations } from "@/localize";
import { ROUTES } from "@/constants/routes";
import { UIListWrapper, UIIcon } from "@/ui";
import { useOpponentsListVM } from "@/context";
import { capitalizeName } from "@shared/utils";

import stylesGlobal from "../../../stylesGlobal.module.css";

export const OpponentsList = observer(() => {
  const {
    canWrite,
    isLoading,
    hasOpponents,
    getOpponents,
    selectOpponentId,
    resetSelectedOpponentId,
    root: {
      routerStore,
      opponentsStore: { opponents },
    },
  } = useOpponentsListVM();

  useEffect(() => {
    getOpponents();
  }, [getOpponents]);

  const renderItems = () => {
    return opponents.map((opponent) => {
      return (
        <div
          key={opponent.id}
          className={stylesGlobal.itemWrapper}
          role="button"
          onClick={() => selectOpponentId(opponent.id!)}
        >
          <div className={stylesGlobal.iconWrapper}>
            <UIIcon size={20} source={"/svg/opponent.svg"} />
          </div>
          <div className={`${stylesGlobal.tableColumn}`}>{opponent.name}</div>
          {opponent.createdAt && (
            <div className={`${stylesGlobal.tableColumn} `}>
              {format(opponent.createdAt, "d MMMM HH:mm", { locale: ru })}
            </div>
          )}
          <div className={`${stylesGlobal.tableColumn}`}>
            {capitalizeName(opponent.author.username)}
          </div>

          <div className={stylesGlobal.iconWrapper}>
            <UIIcon size={12} source={"/svg/chevronRight.svg"} />
          </div>
        </div>
      );
    });
  };

  return (
    <UIListWrapper
      isLoading={isLoading}
      hasItems={hasOpponents}
      canWrite={canWrite}
      bttnTitle={translations.bttns.addOpponent}
      onAdd={() => {
        resetSelectedOpponentId();
        routerStore.push(ROUTES.EDIT_OPPONENT);
      }}
    >
      {renderItems()}
    </UIListWrapper>
  );
});
