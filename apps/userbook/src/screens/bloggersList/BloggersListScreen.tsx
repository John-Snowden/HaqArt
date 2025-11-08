"use client";

import styles from "./styles.module.css";
import { BloggersList } from "./components/BloggersList";

export const BloggersListScreen = () => {
  return (
    <>
      <div className={styles.header}>
        <div>
          <h1 className={styles.headerTitle}>Все блогеры</h1>
        </div>
      </div>

      <div className={styles.subheader}>
        <h4 className={styles.subheaderTitle}>Имя</h4>
        <h4 className={styles.subheaderTitle}>Подписчики</h4>
        <h4 className={styles.subheaderTitle}>Цена SOM/USD</h4>
        <h4 className={styles.subheaderTitle}>Контактный тел</h4>
        <h4 className={styles.subheaderTitle}>Email</h4>
        <h4 className={styles.subheaderTitle}>Категории</h4>
        <h4 className={styles.subheaderTitle}>Автор</h4>
        <h4 className={styles.subheaderTitle}>Дата добавления</h4>
      </div>
      <BloggersList />
    </>
  );
};
