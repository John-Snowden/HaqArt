"use client";

import { translations } from "@/localize";

import { OriginsList } from "./components/OriginsList";
import stylesGlobal from "../../stylesGlobal.module.css";

export const OriginsListScreen = () => {
  return (
    <>
      <h1 className={stylesGlobal.header}>{translations.headers.allOrigins}</h1>
      <div className={stylesGlobal.tableHeader}>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.origin.title}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.origin.categories}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.misc.createdAt}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.origin.authorId}
        </h4>
      </div>
      <OriginsList />
    </>
  );
};
