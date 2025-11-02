"use client";

import Image from "next/image";
import { useEffect } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { ROUTES } from "@/constants/routes";
import { useSourceVM } from "@/app/source/page";

import styles from "./styles.module.css";
import { categoryOptions } from "../addSource/constants/dropdownOptions";
import { sourceFieldsLabels } from "@/constants/writableInputFields";

export const SourceScreen = observer(() => {
  const {
    root: { routerStore },
    selectedSource,
    getSources,
  } = useSourceVM();

  const categoryLabel =
    categoryOptions.find((option) => option.option === selectedSource?.category)
      ?.label || "-";

  useEffect(() => {
    getSources();
  }, [getSources]);

  return (
    <>
      <h1 className={styles.header}>{`"${selectedSource?.title}"`}</h1>
      <form className={styles.form}>
        <div className={styles.inputsWrapper}>
          <UIInput
            disabled
            type="text"
            label={sourceFieldsLabels.title}
            value={selectedSource?.title || "-"}
            placeholder={"..."}
          />
          <UIInput
            disabled
            type="text"
            label={sourceFieldsLabels.sourceLink}
            value={selectedSource?.sourceLink || "-"}
            placeholder={"..."}
            withLinkParser
          />
          <UIInput
            disabled
            type="text"
            label={sourceFieldsLabels.authorName}
            value={selectedSource?.authorName || "-"}
            placeholder={"..."}
          />
          <UIInput
            disabled
            type="text"
            label={sourceFieldsLabels.category}
            value={categoryLabel}
            placeholder={"..."}
          />
          <UIInput
            disabled
            type="text"
            label={sourceFieldsLabels.createdAt}
            value={
              selectedSource?.createdAt
                ? format(selectedSource.createdAt, "d MMMM HH:mm", {
                    locale: ru,
                  })
                : "-"
            }
            placeholder={"..."}
          />
        </div>
      </form>

      <div
        role="button"
        className={styles.bttn}
        onClick={() => routerStore.push(ROUTES.USERS_LIST)}
      >
        <div className={styles.addIcon}>
          <Image
            src={"/svg/people.svg"}
            alt="icon"
            width={32}
            height={32}
            priority={false}
          />
        </div>
        <div>Показать пользователей</div>
      </div>
    </>
  );
});
