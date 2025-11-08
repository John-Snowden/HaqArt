"use client";

import styles from "./styles.module.css";
import { useAddOpponentVm } from "./hooks";
import { AddOpponentForm } from "./components/AddOpponentForm";

export const AddOpponentScreen = () => {
  const { selectedOpponent } = useAddOpponentVm();

  return (
    <div className={styles.main}>
      <h1 className={styles.header}>
        {selectedOpponent?.name || "Новый оппонент"}
      </h1>
      <AddOpponentForm />
    </div>
  );
};
