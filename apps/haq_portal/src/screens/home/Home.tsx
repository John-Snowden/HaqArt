"use client";

import clsx from "clsx";
import Image from "next/image";
import { observer } from "mobx-react-lite";

import { useHomeVM } from "@/context/HomeContext";

import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";

export const HomeScreen = observer(() => {
  const {
    root: { lang, setLang },
  } = useHomeVM();

  return (
    <div className={clsx(stylesGlobal.screen, stylesGlobal.center)}>
      <div className={styles.logoWrapper}>
        <div className={styles.langSwitchWrapper}>
          <div
            className={clsx(styles.langBttn, lang === "uz" && styles.active)}
            onClick={() => setLang("uz")}
          >
            <Image
              src={"/images/uz_flag.png"}
              alt="icon"
              width={20}
              height={13}
              priority={false}
            />
            <div className={stylesGlobal.text}>O`z</div>
          </div>
          <div style={{ color: "lightgray" }}>/</div>
          <div
            className={clsx(styles.langBttn, lang === "ru" && styles.active)}
            onClick={() => setLang("ru")}
          >
            <Image
              src={"/images/ru_flag.png"}
              alt="icon"
              width={20}
              height={13}
              priority={false}
            />
            <div className={stylesGlobal.text}>Рус</div>
          </div>
        </div>

        <Image
          src={"/images/tashkent_500.png"}
          alt="icon"
          width={100}
          height={100}
          priority={false}
        />
      </div>

      <UISep />
      <div className={styles.section}>
        <h3>Сообщите о проблеме</h3>
      </div>
      <UISep />
      <div className={styles.section}>
        <h3>Полезные сервисы</h3>
      </div>
    </div>
  );
});
