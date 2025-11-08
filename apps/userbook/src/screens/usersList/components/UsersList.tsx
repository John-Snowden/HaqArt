"use client";

import Image from "next/image";
import { format } from "date-fns";
import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { ListWrapper } from "@/ui";
import { ROUTES } from "@/constants/routes";
import { useUsersListVM } from "@/app/users_list/page";

import styles from "../styles.module.css";
import { leadStatusOptions } from "@/screens/editUser/constants/dropdownOptions";

export const UsersList = observer(() => {
  const {
    root: { routerStore },
    users,
    isLoading,
    selectUser,
    getUsersBySource,
    resetSelectedUserId,
  } = useUsersListVM();

  useEffect(() => {
    getUsersBySource();
  }, [getUsersBySource]);

  const renderItems = () => {
    return users
      .slice()
      .reverse()
      .map((user) => {
        const leadStatus = leadStatusOptions.find(
          (option) => option.option === user.leadStatus
        )?.label;

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
            <div className={`${styles.userItem}`}>{leadStatus}</div>
            <div className={`${styles.userItem}`}>{user.managerName}</div>
            <div className={`${styles.userItem}`}>
              {user.phoneNumber || "-"}
            </div>
            <div className={`${styles.userItem}`}>{user.authorName}</div>
            {user.createdAt && (
              <div className={styles.userItem}>
                {format(user.createdAt, "d MMMM HH:mm", { locale: ru })}
              </div>
            )}

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
      onAdd={() => routerStore.push(ROUTES.EDIT_USER)}
    >
      {renderItems()}

      <div>
        <div className={styles.bttnWrapper}>
          <div
            className={styles.bttn}
            role="button"
            onClick={() => {
              resetSelectedUserId();
              routerStore.push(ROUTES.EDIT_USER);
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
            <div>Добавить пользователя в источник</div>
          </div>
        </div>
      </div>
    </ListWrapper>
  );
});
