"use client";

import Image from "next/image";
import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useAddOpponentVm } from "../hooks";

import styles from "../styles.module.css";

export const AddOpponentForm = observer(() => {
  const addOpponentVm = useAddOpponentVm();
  const {
    name,
    link,
    info,
    isUpdateMode,
    selectedOpponent,
    setName,
    setLink,
    setInfo,
    updateOpponent,
    saveOpponent,
  } = addOpponentVm;

  return (
    <form
      className={styles.addWrapper}
      onSubmit={async (e) => {
        e.preventDefault();
        await saveOpponent();
      }}
    >
      <div className={styles.inputsWrapper}>
        <UIInput
          type="text"
          label={"Название"}
          value={name || ""}
          placeholder={"..."}
          onChange={(value) => setName(value)}
          onBlur={isUpdateMode ? updateOpponent : undefined}
        />
        <UIInput
          type="text"
          label={"Ссылка"}
          value={link || ""}
          placeholder={"..."}
          onChange={(value) => setLink(value)}
          onBlur={isUpdateMode ? updateOpponent : undefined}
        />
      </div>

      <div className={styles.inputGroup}>
        <h4 className={styles.label}>Информация</h4>
        <div style={{ display: "flex", width: "80vw" }}>
          <textarea
            rows={16}
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className={styles.fullProblemWrapper}
            onBlur={isUpdateMode ? updateOpponent : undefined}
          />
        </div>
      </div>

      <div className={styles.inputsWrapper}></div>

      {!selectedOpponent?.id && (
        <button type="submit" className={styles.fakeBttn}>
          <div className={styles.bttnWrapper} role="button">
            <div className={styles.bttn}>
              <div className={styles.addIcon}>
                <Image
                  src={"/svg/add.svg"}
                  alt="icon"
                  width={26}
                  height={26}
                  priority={false}
                />
              </div>
              <div>Добавить оппонента</div>
            </div>
          </div>
        </button>
      )}
    </form>
  );
});
