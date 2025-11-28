"use client";

import { translations } from "@/localize";

import stylesGlobal from "../../stylesGlobal.module.css";
import { OpponentsList } from "./components/OpponentsList";

export const OpponentsListScreen = () => {
  return (
    <>
      <h1 className={stylesGlobal.header}>
        {translations.headers.allOpponents}
      </h1>
      <div className={stylesGlobal.tableHeader}>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.opponent.name}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.misc.createdAt}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.opponent.authorId}
        </h4>
      </div>
      <OpponentsList />
    </>
  );
};
