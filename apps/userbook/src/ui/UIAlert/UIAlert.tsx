"use client";

import { observer } from "mobx-react-lite";

import { useRootStore } from "@/context";

import styles from "./styles.module.css";
import { UIIcon } from "../UIIcon/UIIcon";
import stylesGlobal from "../../stylesGlobal.module.css";

export const UIAlert = observer(() => {
  const {
    alertStore: { isVisible, message, toggleAlert },
  } = useRootStore();

  if (!isVisible) return null;
  else
    return (
      <div className={stylesGlobal.screen}>
        <div className={styles.bg} onClick={() => toggleAlert()} />
        <div className={styles.main}>
          <div className={styles.alertWrapper}>
            <div className={styles.titleWrapper}>
              <UIIcon size={80} source={"/svg/error.svg"} />
            </div>
            <h3 className={styles.message}>{message}</h3>
          </div>
        </div>
      </div>
    );
});
