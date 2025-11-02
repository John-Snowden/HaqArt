"use client";

import { observer } from "mobx-react-lite";

import { useDeskVM } from "@/app/desk/page";
import { userFieldLabels } from "@/constants/writableInputFields";

import styles from "./styles.module.css";
import { Search } from "./components/Search";
import { Filters } from "./components/Filters";
import { DeskList } from "./components/DeskList";

export const DeskScreen = observer(() => {
  const { unassignedUsersCount, searchFilters } = useDeskVM();

  return (
    <>
      <div className={styles.header}>
        <div>
          <h1 className={styles.headerTitle}>Мои задачи</h1>
          {searchFilters.managerId === "none" && (
            <h4 className={styles.headerSubTitle}>
              Без исполнителя: {unassignedUsersCount}
            </h4>
          )}
        </div>
        <div className={styles.headerRight}>
          <Filters />
          <Search />
        </div>
      </div>

      <div className={styles.subheader}>
        <h4 className={styles.subheaderTitle}>{userFieldLabels.username}</h4>
        <h4 className={styles.subheaderTitle}>
          {userFieldLabels.problemShort}
        </h4>
        <h4 className={styles.subheaderTitle}>{userFieldLabels.nearestTask}</h4>
        <h4 className={styles.subheaderTitle}>
          {userFieldLabels.nearestTaskDeadline}
        </h4>
        <h4 className={styles.subheaderTitle}>{userFieldLabels.taskUrgency}</h4>

        <h4 className={styles.subheaderTitle}>{userFieldLabels.managerId}</h4>
        <h4 className={styles.subheaderTitle}>{userFieldLabels.opponentId}</h4>
        <h4 className={styles.subheaderTitle}>
          {userFieldLabels.assignmentTime}
        </h4>
        <h4 className={styles.subheaderTitle}>{userFieldLabels.taskStatus}</h4>
      </div>
      <DeskList />
    </>
  );
});
