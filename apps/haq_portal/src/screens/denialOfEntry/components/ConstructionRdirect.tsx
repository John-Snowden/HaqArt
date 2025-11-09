"use client";

import { UIIcon } from "@/ui/UIIcon/UIIcon";

import styles from "./styles.module.css";

export const ConstructionRdirectBttn = () => {
  return (
    <div>
      <a
        href="https://t.me/Hakim_Portali_Bot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.redirectBttn}>
          <UIIcon source="/svg/telegram.svg" isInverted />
          <div style={{ marginLeft: 6 }}>Hakim Portali</div>
        </div>
      </a>
    </div>
  );
};
