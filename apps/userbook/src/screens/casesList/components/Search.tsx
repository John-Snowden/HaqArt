"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { translations } from "@/localize";
import { useCasesListVM } from "@/context";

import styles from "../styles.module.css";

export const Search = observer(() => {
  const { searchText, setSearchText } = useCasesListVM();

  return (
    <div className={styles.searchWrapper}>
      <h1 className={styles.searchHeader}>{translations.misc.search}:</h1>
      <div className={styles.flex}>
        <UIInput
          value={searchText}
          placeholder={translations.misc.byNameOrLink}
          onChange={setSearchText}
        />
      </div>
    </div>
  );
});
