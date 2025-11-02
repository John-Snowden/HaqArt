"use client";

import styles from "./styles.module.css";
import { SourcesList } from "./components/SourcesList";

export const SourcesListScreen = () => {
  return (
    <>
      <h1 className={styles.header}>Все источники</h1>
      <div className={styles.subheader}>
        <h4 className={styles.subheaderTitle}>Название</h4>
        <h4 className={styles.subheaderTitle}>Категория</h4>
        <h4 className={styles.subheaderTitle}>Дата добавления</h4>
        <h4 className={styles.subheaderTitle}>Автор</h4>
      </div>
      <SourcesList />
    </>
  );
};
