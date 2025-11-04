"use client";

import { observer } from "mobx-react-lite";

import { useEditSourceVM } from "@/app/edit_source/page";

import styles from "./styles.module.css";
import { EditSourceForm } from "./components/EditSourceForm";

export const EditSourceScreen = observer(() => {
  const { selectedSource } = useEditSourceVM();

  return (
    <div>
      <h1 className={styles.header}>
        {selectedSource ? selectedSource.title : "Новый источник"}
      </h1>
      <EditSourceForm />
    </div>
  );
});
