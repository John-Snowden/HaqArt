"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";
import { format, formatDistanceToNowStrict } from "date-fns";

import { ListWrapper } from "@/ui";
import { ROUTES } from "@/constants/routes";
import { useDeskVM } from "@/app/desk/page";
import {
  taskStatusOptions,
  taskUrgencyOptions,
} from "@/screens/editUser/constants/dropdownOptions";

import styles from "../styles.module.css";
import { TASK_URGENCY } from "@shared/prisma/prisma/client";

export const DeskList = observer(() => {
  const {
    root: { routerStore },
    users,
    isLoading,
    getFilteredUsers,
    selectUser,
  } = useDeskVM();

  useEffect(() => {
    getFilteredUsers();
  }, [getFilteredUsers]);

  const renderItems = () => {
    return users
      .slice()
      .reverse()
      .map((user) => {
        const taskUrgency = taskUrgencyOptions.find(
          (option) => option.option === user.taskUrgency
        )?.label;

        const taskStatus = taskStatusOptions.find(
          (option) => option.option === user.taskStatus
        )?.label;

        const assignmentTime = user.assignmentTime
          ? formatDistanceToNowStrict(user.assignmentTime, {
              addSuffix: true,
              locale: ru,
            })
          : "-";

        return (
          <div
            key={user.id}
            className={styles.itemWrapper}
            role="button"
            onClick={() => selectUser(user.id)}
          >
            <div className={styles.iconWrapper}>
              <Image
                src={"/svg/user.svg"}
                alt="icon"
                width={20}
                height={20}
                priority={false}
              />
            </div>
            <div className={`${styles.userItem}`}>{user.username}</div>
            <div className={`${styles.userItem}`}>
              {user.problemShort || "-"}
            </div>
            <div className={`${styles.userItem}`}>
              {user.nearestTask || "-"}
            </div>
            <div className={`${styles.userItem}`}>
              {user.nearestTaskDeadline
                ? format(user.nearestTaskDeadline, "d MMM HH:mm", {
                    locale: ru,
                  })
                : "-"}
            </div>
            <div className={`${styles.userItem}`}>
              {taskUrgency}
              {user.taskUrgency === TASK_URGENCY.five && (
                <div
                  style={{
                    marginLeft: 24,
                    filter:
                      "invert(33%) sepia(97%) saturate(7200%) hue-rotate(0deg)",
                  }}
                >
                  <Image
                    src={"/svg/lightBulb.svg"}
                    alt="icon"
                    width={18}
                    height={18}
                    priority={false}
                  />
                </div>
              )}
            </div>
            <div className={`${styles.userItem}`}>{user.managerName}</div>
            <div className={`${styles.userItem}`}>{user.opponentName}</div>
            <div className={styles.userItem}>{assignmentTime}</div>
            <div className={`${styles.userItem}`}>{taskStatus}</div>

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
      hasItems={users.length !== 0}
      onAdd={() => routerStore.push(ROUTES.SOURCES_LIST)}
    >
      {renderItems()}
    </ListWrapper>
  );
});
