"use client";

import Image from "next/image";
import { observer } from "mobx-react-lite";

import styles from "./styles.module.css";
import { useEditBloggerVM } from "./hooks";
import { EditBloggerForm } from "./components/EditBloggerForm";

export const EditBloggerScreen = observer(() => {
  const {
    selectedBlogger,
    isUpdateMode,
    isUpdated,
    saveBlogger,
    updateBlogger,
  } = useEditBloggerVM();

  return (
    <div className={styles.main}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.header}>
          {selectedBlogger?.name || "Новый блогер"}
        </h1>
        {isUpdated && (
          <ConfirmButton
            isUpdateMode={isUpdateMode}
            updateBlogger={updateBlogger}
            saveBlogger={saveBlogger}
          />
        )}
      </div>
      <EditBloggerForm />
    </div>
  );
});

const ConfirmButton = ({
  isUpdateMode,
  updateBlogger,
  saveBlogger,
}: {
  isUpdateMode: boolean;
  updateBlogger(): void;
  saveBlogger(): void;
}) => {
  return (
    <div
      className={styles.bttnWrapper}
      role="button"
      onClick={isUpdateMode ? updateBlogger : saveBlogger}
    >
      <Image
        src={"/svg/add.svg"}
        alt="icon"
        width={26}
        height={26}
        priority={false}
      />
      <div className={styles.addTitle}>Сохранить</div>
    </div>
  );
};
