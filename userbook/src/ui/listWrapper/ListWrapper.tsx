"use client";

import Image from "next/image";
import { FC, ReactNode } from "react";

import styles from "./styles.module.css";
import { UILoader } from "../loader/UILoader";

interface IProps {
  isLoading: boolean;
  hasItems: boolean;
  children: ReactNode;
  onAdd?(): void;
}

export const ListWrapper: FC<IProps> = ({
  isLoading,
  hasItems,
  children,
  onAdd,
}) => {
  if (isLoading) return <UILoader />;
  return (
    <div className={styles.listWrapper}>
      {hasItems ? (
        children
      ) : (
        <div className={styles.main}>
          <h1 className={styles.title}>Нет записей</h1>

          {onAdd && (
            <div className={styles.bttn} role="button" onClick={onAdd}>
              <div className={styles.addIcon}>
                <Image
                  src={"/svg/add.svg"}
                  alt="icon"
                  width={26}
                  height={26}
                  priority={false}
                />
              </div>
              <div style={{ marginLeft: 12 }}>Добавить</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
