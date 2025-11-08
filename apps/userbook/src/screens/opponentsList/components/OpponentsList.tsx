"use client";

import Image from "next/image";
import { format } from "date-fns";
import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { ROUTES } from "@/constants/routes";
import { ListWrapper } from "@/ui/listWrapper/ListWrapper";
import { useOpponentsListVM } from "../hooks";

import styles from "../styles.module.css";

export const OpponentsList = observer(() => {
  const {
    root: { routerStore },
    opponents,
    isLoading,
    hasOpponents,
    getOpponents,
    selectOpponentId,
    resetSelectedOpponentId,
  } = useOpponentsListVM();

  useEffect(() => {
    getOpponents();
  }, [getOpponents]);

  const renderItems = () => {
    return opponents.map((opponent) => {
      if (!opponent.id) return <div key={opponent.id}>n/a</div>;
      else
        return (
          <div
            key={opponent.id}
            className={styles.itemWrapper}
            role="button"
            onClick={() => selectOpponentId(opponent.id!)}
          >
            <div className={styles.iconWrapper}>
              <Image
                src={"/svg/opponent.svg"}
                alt="icon"
                width={20}
                height={20}
                priority={false}
              />
            </div>
            <div className={`${styles.sourceItem}`}>{opponent.name}</div>
            {opponent.createdAt && (
              <div className={`${styles.sourceItem} `}>
                {format(opponent.createdAt, "d MMMM HH:mm", { locale: ru })}
              </div>
            )}
            <div className={`${styles.sourceItem} `}>
              {opponent.info || "Нет информации"}
            </div>

            <div className={styles.forwardWrapper}>
              <Image
                src={"/svg/chevronRight.svg"}
                alt="icon"
                width={12}
                height={12}
                priority={false}
              />
            </div>
          </div>
        );
    });
  };

  return (
    <ListWrapper
      isLoading={isLoading}
      hasItems={hasOpponents}
      onAdd={() => routerStore.push(ROUTES.ADD_OPPONENT)}
    >
      {renderItems()}

      <div className={styles.bttnWrapper}>
        <div
          className={styles.bttn}
          role="button"
          onClick={() => {
            resetSelectedOpponentId();
            routerStore.push(ROUTES.ADD_OPPONENT);
          }}
        >
          <div className={styles.addIcon}>
            <Image
              src={"/svg/add.svg"}
              alt="icon"
              width={26}
              height={26}
              priority={false}
            />
          </div>
          <div>Добавить нового оппонента</div>
        </div>
      </div>
    </ListWrapper>
  );
});
