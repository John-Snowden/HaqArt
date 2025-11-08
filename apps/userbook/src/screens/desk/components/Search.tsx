"use client";

import clsx from "clsx";
import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useDeskVM } from "@/app/desk/page";
import { sourceFieldsLabels } from "@/constants/writableInputFields";

import styles from "../styles.module.css";

export const Search = observer(() => {
  const { searchText, soughtUsers, searchUsers, selectUser } = useDeskVM();

  const renderItems = () => {
    return soughtUsers.map((user) => {
      return (
        <div
          key={user.id}
          role="button"
          className={clsx(styles.itemWrapper, styles.searchItemWrapper)}
          onClick={() => selectUser(user.id)}
        >
          {`${user.username}, ${user.userLink || "-"}`}
        </div>
      );
    });
  };

  return (
    <div className={styles.searchWrapper}>
      <h1 className={styles.searchHeader}>{sourceFieldsLabels.search}:</h1>
      <div className={styles.flex}>
        <UIInput
          type="text"
          placeholder="по имени или ссылке"
          value={searchText}
          onChange={searchUsers}
        />
        {renderItems()}
      </div>
    </div>
  );
});
