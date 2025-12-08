"use client";

import Image from "next/image";
import { observer } from "mobx-react-lite";

import { useRootStore } from "@/context";

import styles from "./styles.module.css";
import { StatsList } from "./components/StatsList";

export const ProfileScreen = observer(() => {
  const {
    authStore: { logout },
  } = useRootStore();

  return (
    <>
      <StatsList />
      <div className={styles.bottomMenu}>
        {/* <div className={styles.bttnWrapper} onClick={toggleTheme}>
          <h3 className={styles.themeToggleText}> {"Сменить тему"}</h3>
          <Image
            src={"/svg/themeToggle.svg"}
            alt="icon"
            width={30}
            height={30}
            priority={false}
          />
        </div> */}
        <div className={styles.bttnWrapper} onClick={logout}>
          <h3 className={styles.themeToggleText}> {"Выйти"}</h3>
          <Image
            src={"/svg/logout.svg"}
            alt="icon"
            width={30}
            height={30}
            priority={false}
          />
        </div>
      </div>
    </>
  );
});
