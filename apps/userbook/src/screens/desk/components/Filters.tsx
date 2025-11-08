"use client";

import Image from "next/image";
import { observer } from "mobx-react-lite";

import { useDeskVM } from "@/app/desk/page";
import { Dropdown } from "@/ui/dropdown/UIDropdown";
import { userFieldLabels } from "@/constants/writableInputFields";

import styles from "../styles.module.css";

export const Filters = observer(() => {
  const {
    isSuperRole,
    searchFilters,
    managerFilterOptions,
    taskStatusFilterOptions,
    taskUrgencyFilterOptions,
    taskImportanceFilterOptions,
    setFilterManagerId,
    setFilterTaskStatus,
    setFilterTaskUrgency,
    setFilterTaskImportance,
  } = useDeskVM();

  return (
    <div className={styles.searchFiltersWrapper}>
      <h1 className={styles.filterHeader}>Фильтры:</h1>
      {isSuperRole && (
        <div className={styles.filterWrapper}>
          <Image
            src={"/svg/manager.svg"}
            alt="icon"
            width={20}
            height={20}
            priority={false}
          />
          <div className={styles.flex}>
            <h4 className={styles.searchFilterTitle}>
              {userFieldLabels.managerId}
            </h4>
            <Dropdown
              value={String(searchFilters.managerId)}
              options={managerFilterOptions}
              onClick={setFilterManagerId}
            />
          </div>
        </div>
      )}

      <div className={styles.filterWrapper}>
        <Image
          src={"/svg/pen.svg"}
          alt="icon"
          width={16}
          height={16}
          priority={false}
        />
        <div className={styles.flex}>
          <h4 className={styles.searchFilterTitle}>
            {userFieldLabels.taskStatus}
          </h4>
          <Dropdown
            value={searchFilters.taskStatus}
            options={taskStatusFilterOptions}
            onClick={setFilterTaskStatus}
          />
        </div>
      </div>

      <div className={styles.filterWrapper}>
        <Image
          src={"/svg/taskUrgency.svg"}
          alt="icon"
          width={26}
          height={26}
          priority={false}
        />
        <div className={styles.flex}>
          <h4 className={styles.searchFilterTitle}>
            {userFieldLabels.taskUrgency}
          </h4>
          <Dropdown
            value={searchFilters.taskUrgency}
            options={taskUrgencyFilterOptions}
            onClick={setFilterTaskUrgency}
          />
        </div>
      </div>

      <div className={styles.filterWrapper}>
        <Image
          src={"/svg/dollar.svg"}
          alt="icon"
          width={26}
          height={26}
          priority={false}
        />
        <div className={styles.flex}>
          <h4 className={styles.searchFilterTitle}>
            {userFieldLabels.taskImportance}
          </h4>
          <Dropdown
            value={searchFilters.taskImportance}
            options={taskImportanceFilterOptions}
            onClick={setFilterTaskImportance}
          />
        </div>
      </div>
    </div>
  );
});
