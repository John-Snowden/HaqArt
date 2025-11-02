"use client";

import styles from "./styles.module.css";
import { OpponentsList } from "./components/OpponentsList";

export const OpponentsListScreen = () => {
  return (
    <>
      <h1 className={styles.header}>Все оппоненты</h1>
      <div className={styles.subheader}>
        <h4 className={styles.subheaderTitle}>Название</h4>
        <h4 className={styles.subheaderTitle}>Дата добавления</h4>
        <h4 className={styles.subheaderTitle}>Информация</h4>
      </div>
      <OpponentsList />
    </>
  );
};
