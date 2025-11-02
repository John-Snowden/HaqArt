"use client";

import styles from "./styles.module.css";
import { AddSourceForm } from "./components/AddSourceForm";

export const AddSourceScreen = () => {
  return (
    <div>
      <h1 className={styles.header}>Новый источник</h1>
      <AddSourceForm />
    </div>
  );
};
