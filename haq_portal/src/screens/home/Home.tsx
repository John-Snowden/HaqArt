"use client";

import clsx from "clsx";

import { UIButton } from "@/ui";
import { ROUTES } from "@/routes/routes";
import { useRootStore } from "@/context/RootContext";

import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";

export const HomeScreen = () => {
  const {
    routerStore: { router },
  } = useRootStore();

  return (
    <div className={clsx(stylesGlobal.screen, stylesGlobal.center)}>
      <div className={styles.bttnWrapper}>
        <label className={styles.lbl}>
          Проверьте, имеется ли у Вас запрет на въезд
        </label>
        <UIButton
          style={styles.bttn}
          title="Запреты на въезд"
          onClick={() => router.push(ROUTES.DENIAL_OF_ENTRY)}
        />
      </div>

      <div className={styles.bttnWrapper}>
        <label className={styles.lbl}>
          Подайте жалобу на Вашего застройщика
        </label>
        <UIButton
          style={styles.bttn}
          title="Жалоба на застройщика"
          onClick={() => router.push(ROUTES.CONSTRUCTION_COMPLAINTS)}
        />
      </div>

      <div className={styles.bttnWrapper}>
        <label className={styles.lbl}>
          Прием обращений по кредитным договорам
        </label>
        <UIButton
          style={styles.bttn}
          title="Кредиты"
          onClick={() => router.push(ROUTES.LOANS_ISSUES)}
        />
      </div>
    </div>
  );
};
