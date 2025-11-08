"use client";

import { FC, ReactNode } from "react";

import styles from "./styles.module.css";

interface IProps {
  children: ReactNode;
}

export const Screen: FC<IProps> = ({ children }) => {
  return <div className={styles.screen}>{children}</div>;
};
