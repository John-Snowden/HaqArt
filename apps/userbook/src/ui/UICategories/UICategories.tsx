"use client";

import clsx from "clsx";
import { FC } from "react";

import { UIIcon } from "@/ui";
import { translations } from "@/localize";
import { CASE_CATEGORY } from "@shared/prisma/prisma/client";

import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";

interface Props {
  canWrite: boolean;
  selectedCategories: CASE_CATEGORY[];
  updateCategories(data: CASE_CATEGORY[]): void;
}

const allCategories = Object.keys(translations.categories) as CASE_CATEGORY[];

export const UICategories: FC<Props> = ({
  canWrite,
  selectedCategories,
  updateCategories,
}) => {
  const toggleCategory = (category: CASE_CATEGORY) => {
    const isSelected = selectedCategories.includes(category);
    if (isSelected)
      updateCategories(selectedCategories.filter((c) => c !== category));
    else updateCategories([...selectedCategories, category]);
  };

  const renderCategories = () => {
    return allCategories.map((category) => {
      const isSelected = selectedCategories.includes(category);
      return (
        <div
          key={category}
          className={clsx(styles.categoryItem, isSelected && styles.selected)}
          onClick={() => {
            if (canWrite) toggleCategory(category);
          }}
        >
          {translations.categories[category]}
          {!canWrite && (
            <div style={{ marginLeft: 8 }}>
              <UIIcon size={14} source={"/svg/lock.svg"} />
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className={stylesGlobal.row}>
      <h4 style={{ marginRight: 12 }}>{translations.origin.categories}</h4>
      {renderCategories()}
    </div>
  );
};
