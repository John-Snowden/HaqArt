"use client";

import Image from "next/image";
import { useState } from "react";
import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useEditUserVM } from "@/app/edit_user/page";

import styles from "../styles.module.css";

export const OpponentSection = observer(() => {
  const {
    searchText,
    selectedUser,
    isUpdateMode,
    searchedOpponents,
    setOpponentId,
    setSearchText,
    setSelectedOpponentId,
  } = useEditUserVM();

  const [isOpen, setOpen] = useState(false);

  const renderItems = () => {
    return searchedOpponents.map((opponent) => {
      return (
        <div
          key={opponent.id}
          className={styles.bttn}
          role="button"
          style={{ width: "26vw", justifyContent: "start" }}
          onClick={() => {
            setOpponentId(opponent.id);
            setSearchText(opponent.name);
            setOpen(false);
          }}
        >
          {opponent.name}
        </div>
      );
    });
  };

  return (
    <div>
      <div
        className={styles.inputGroup}
        style={{ display: "flex", width: "36vw" }}
      >
        <h4>Оппонент</h4>
        <div className={styles.searchWrapper}>
          <UIInput
            type="text"
            value={searchText}
            placeholder="..."
            onChange={(value) => {
              setSearchText(value);
              if (!value) setOpponentId(null);
              setOpen(true);
            }}
          />
        </div>
        {Boolean(searchText) && (
          <div className={styles.bttnsWrapper}>
            <div
              className={styles.bttn}
              role="button"
              onClick={() => {
                setSearchText("");
                setOpponentId(null);
              }}
            >
              <Image
                src={"/svg/delete.svg"}
                alt="icon"
                width={22}
                height={22}
                priority={false}
              />
            </div>
            {isUpdateMode && selectedUser?.opponentId && (
              <div
                className={styles.bttn}
                role="button"
                onClick={() => setSelectedOpponentId(selectedUser.opponentId!)}
              >
                <Image
                  src={"/svg/link.svg"}
                  alt="icon"
                  width={16}
                  height={16}
                  priority={false}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {Boolean(searchText) && isOpen && (
        <div className={styles.suggestionsWrapper}>{renderItems()}</div>
      )}
    </div>
  );
});
