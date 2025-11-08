"use client";

import Image from "next/image";
import { observer } from "mobx-react-lite";

import { useRootStore } from "@/app/RootClientContext";

import styles from "./styles.module.css";

export const Alert = observer(() => {
  const {
    alertStore: { isVisible, message, toggleAlert },
  } = useRootStore();

  if (!isVisible) return null;
  else
    return (
      <div className={styles.screen}>
        <div className={styles.bg} onClick={() => toggleAlert()} />
        <div className={styles.alertWrapper}>
          <div className={styles.titleWrapper}>
            <Image
              src={"/svg/error.svg"}
              alt="icon"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <h3 className={styles.message}>{message}</h3>
        </div>
      </div>
    );
});
