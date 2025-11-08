"use client";

import Image from "next/image";
import { format } from "date-fns";
import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { ROUTES } from "@/constants/routes";
import { ListWrapper } from "@/ui/listWrapper/ListWrapper";
import { useSourcesListVM } from "@/app/sources_list/page";
import { categoryOptions } from "@/screens/editSource/constants/dropdownOptions";

import styles from "../styles.module.css";

export const SourcesList = observer(() => {
  const {
    root: { routerStore },
    sources,
    isLoading,
    hasSources,
    getSources,
    selectSource,
    resetSelectedSource,
  } = useSourcesListVM();

  useEffect(() => {
    getSources();
  }, [getSources]);

  const renderItems = () => {
    return sources.map((source) => {
      if (!source.id) return <div key={source.id}>n/a</div>;
      else {
        const categoryLabel =
          categoryOptions.find((option) => option.option === source.category)
            ?.label || "-";
        return (
          <div
            key={source.id}
            className={styles.itemWrapper}
            role="button"
            onClick={() => selectSource(source.id!)}
          >
            <Image
              src={"/svg/sources.svg"}
              alt="icon"
              width={20}
              height={20}
              priority={false}
            />
            <div className={`${styles.sourceItem}`}>{source.title}</div>
            <div className={`${styles.sourceItem}`}>{categoryLabel}</div>
            {source.createdAt && (
              <div className={`${styles.sourceItem} `}>
                {format(source.createdAt, "d MMMM HH:mm", { locale: ru })}
              </div>
            )}
            <div className={`${styles.sourceItem} `}>{source.authorName}</div>

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
      }
    });
  };

  return (
    <ListWrapper
      isLoading={isLoading}
      hasItems={hasSources}
      onAdd={() => routerStore.push(ROUTES.EDIT_SOURCE)}
    >
      {renderItems()}

      <div className={styles.bttnWrapper}>
        <div
          className={styles.bttn}
          role="button"
          onClick={() => {
            resetSelectedSource();
            routerStore.push(ROUTES.EDIT_SOURCE);
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
          <div>Добавить новый источник</div>
        </div>
      </div>
    </ListWrapper>
  );
});
