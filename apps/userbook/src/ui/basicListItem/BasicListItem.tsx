"use client";

import { FC } from "react";

import styles from "./styles.module.css";

interface IProps {
  title: string;
  data: number | string | null | undefined;
}

export const BasicListItem: FC<IProps> = ({ title, data }) => {
  const isLink = typeof data === "string" && data.includes("https://");

  return (
    <div className={styles.itemWrapper}>
      <div className={styles.titleWrapper}>{title}</div>
      {isLink ? (
        <a href={data} target="_blank" className={styles.link}>
          {data}
        </a>
      ) : (
        <div> {data || "-"}</div>
      )}
    </div>
  );
};
