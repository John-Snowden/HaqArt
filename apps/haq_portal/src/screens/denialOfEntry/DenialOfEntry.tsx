"use client";

import clsx from "clsx";
import Image from "next/image";
import { observer } from "mobx-react-lite";

import { UIButton, UISep } from "@/ui";
import { translations } from "@/localize";
import { useDenialOfEntryVM } from "@/context/DenialOfEntry";

import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";
import { ConstructionModal } from "./components/ConstructionModal";
import { ConstructionRdirectBttn } from "./components/ConstructionRdirect";
import { ResultModal } from "./components/ResultModal";

export const DenialOfEntryScreen = observer(() => {
  const {
    root: { lang, setLang },
    setDeniedStatus,
  } = useDenialOfEntryVM();

  return (
    <div className={clsx(stylesGlobal.screen, stylesGlobal.center)}>
      <div className={styles.logoWrapper}>
        <div className={styles.redirectBttnWrapper}>
          <h4>{translations.denialOfEntry.redirectMessageTop[lang]}</h4>
          <h4 style={{ marginBottom: 4 }}>
            {translations.denialOfEntry.redirectMessageBottom[lang]}
          </h4>
          <ConstructionRdirectBttn />
        </div>

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

        <div
          style={{
            borderRadius: 500,
            overflow: "hidden",
          }}
        >
          <Image
            src={"/images/zapret_500.png"}
            alt="icon"
            width={100}
            height={100}
            priority={false}
          />
        </div>
      </div>

      <UISep />
      <UIButton
        title={translations.denialOfEntry.check[lang]}
        icon="/svg/search.svg"
        isInverted
        onClick={() => setDeniedStatus(true)}
      />

      <ConstructionModal />
      <ResultModal />
    </div>
  );
});
