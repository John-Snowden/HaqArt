"use client";

import Image from "next/image";
import { observer } from "mobx-react-lite";

import { useEditUserVM } from "@/app/edit_user/page";

import styles from "./styles.module.css";
import { Contacts } from "./components/Contacts";
import { BasicInfo } from "./components/BasicInfo";
import { Dropdowns } from "./components/Dropdowns";
import { CourtInfo } from "./components/CourtInfo";
import { ProblemInputs } from "./components/ProblemInputs";
import { SuperRoleDropdowns } from "./components/SuperRoleDropdowns";
import { NearestTaskSection } from "./components/NearestTaskSection";

export const EditUserScreen = observer(() => {
  const {
    isUpdated,
    selectedUser,
    isUpdateMode,
    currentEditStep,
    saveNewUser,
    updateUser,
  } = useEditUserVM();

  console.log("current", currentEditStep);

  return (
    <div className={styles.main}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.header}>
          {selectedUser?.username || "Новый пользователь"}
        </h1>
        {isUpdated && (
          <ConfirmButton
            isUpdateMode={isUpdateMode}
            updateUser={updateUser}
            saveNewUser={saveNewUser}
          />
        )}
      </div>

      <div className={styles.inputsWrapper}>
        <div className={styles.dullGray}>
          Шаг 1: заполнить, затем отправить сообщение
        </div>
        <BasicInfo />

        {currentEditStep >= 2 && (
          <>
            <div className={styles.sep} />
            <div className={styles.dullGray}>Шаг 2: лид дал контакт</div>
            <Contacts />
          </>
        )}

        {currentEditStep >= 3 && (
          <>
            <div className={styles.sep} />
            <div className={styles.dullGray}>Шаг 3: после созвона</div>
            <ProblemInputs />
          </>
        )}

        {currentEditStep >= 4 && (
          <>
            <div className={styles.sep} />
            <div className={styles.dullGray}>
              Шаг 4: Заполняется руководителем
            </div>
            <SuperRoleDropdowns />
          </>
        )}

        {currentEditStep >= 5 && (
          <>
            <div className={styles.sep} />
            <div className={styles.dullGray}>
              Шаг 5: после выработки стратегии
            </div>
            <NearestTaskSection />

            <div className={styles.sep} />
            <div className={styles.dullGray}>Шаг 6: ближайший суд</div>
            <CourtInfo />

            <div className={styles.sep} />
            <div className={styles.dullGray}>Шаг 7: обновить статус задачи</div>
            <Dropdowns />
          </>
        )}
      </div>
    </div>
  );
});

const ConfirmButton = ({
  isUpdateMode,
  updateUser,
  saveNewUser,
}: {
  isUpdateMode: boolean;
  updateUser(): void;
  saveNewUser(): void;
}) => {
  return (
    <div
      className={styles.bttnWrapper}
      role="button"
      onClick={isUpdateMode ? updateUser : saveNewUser}
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
