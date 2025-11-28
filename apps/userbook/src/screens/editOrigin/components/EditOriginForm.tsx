"use client";

import { observer } from "mobx-react-lite";

import { useEditOriginVM } from "@/context";
import { UIInput, UISep, UICategories } from "@/ui";
import { translations } from "@/localize/translations";

import styles from "../styles.module.css";

export const EditOriginForm = observer(() => {
  const {
    link,
    title,
    canWrite,
    categories,
    setTitle,
    setCategories,
    setOriginLink,
  } = useEditOriginVM();

  return (
    <form className={styles.addWrapper}>
      <UIInput
        value={title}
        disabled={!canWrite}
        label={translations.origin.title}
        onChange={(value) => setTitle(value)}
      />
      <UIInput
        value={link}
        disabled={!canWrite}
        label={translations.origin.link}
        onChange={(value) => setOriginLink(value)}
      />

      <UISep />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <UICategories
          canWrite={canWrite}
          selectedCategories={categories}
          updateCategories={setCategories}
        />
      </div>
    </form>
  );
});
