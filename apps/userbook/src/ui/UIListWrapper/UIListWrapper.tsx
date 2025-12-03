"use client";

import { FC, ReactNode } from "react";

import { translations } from "@/localize";
import { UISep, UILoader, UIButton } from "@/ui";

import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";

interface IProps {
  isLoading: boolean;
  hasItems: boolean;
  canWrite?: boolean;
  bttnTitle?: string;
  children: ReactNode;
  onAdd?(): void;
}

export const UIListWrapper: FC<IProps> = ({
  isLoading,
  hasItems,
  bttnTitle,
  canWrite,
  children,
  onAdd,
}) => {
  if (isLoading) return <UILoader />;
  else if (!hasItems) {
    return (
      <div className={styles.emptyWrapper}>
        <h1>{translations.misc.noRecords}</h1>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <div className={stylesGlobal.scrollable}>{children}</div>
        <UISep />
        {onAdd && canWrite && (
          <div className={stylesGlobal.footer}>
            <UIButton title={bttnTitle} onClick={onAdd} />
          </div>
        )}
      </div>
    );
  }
};
