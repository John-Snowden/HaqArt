"use client";

import { observer } from "mobx-react-lite";

import { UsersList } from "./components/UsersList";
import { useUsersListVM } from "@/app/users_list/page";

import styles from "./styles.module.css";

export const UserListScreen = observer(() => {
  const { selectedSource } = useUsersListVM();

  return (
    <>
      <h1 className={styles.header}>{`"${selectedSource?.title}"`}</h1>
      <div className={styles.subheader}>
        <h4 className={styles.subheaderTitle}>Имя</h4>
        <h4 className={styles.subheaderTitle}>Статус лида</h4>
        <h4 className={styles.subheaderTitle}>Исполнитель</h4>
        <h4 className={styles.subheaderTitle}>Телефон</h4>
        <h4 className={styles.subheaderTitle}>Автор</h4>
        <h4 className={styles.subheaderTitle}>Создан</h4>
      </div>
      <UsersList />
    </>
  );
});
