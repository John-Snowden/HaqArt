"use client";

import { FC } from "react";

import styles from "../styles.module.css";

interface IProps {
  title: string;
  data: number | string | null;
}

export const StatsListItem: FC<IProps> = ({ title, data }) => {
  return (
    <div className={styles.statsWrapper}>
      <div className={styles.itemWrapper}>
        <div className={styles.titleWrapper}>{title}</div>
        <div> {data || "-"}</div>
      </div>
    </div>
  );
};
