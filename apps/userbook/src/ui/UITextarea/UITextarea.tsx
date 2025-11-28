"use client";

import { FC } from "react";

import styles from "./styles.module.css";
import { translations } from "@/localize";
import { UISep } from "../UISep/UISep";

interface Props {
  rowsCount?: number;
  value: string | undefined;
  onChange(value: string): void;
}

export const UITextarea: FC<Props> = ({ rowsCount = 16, value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <h4>{translations.misc.info}</h4>
      <UISep times={0.5} />
      <textarea
        value={value}
        rows={rowsCount}
        onChange={(e) => onChange(e.target.value)}
        className={styles.textArea}
      />
    </div>
  );
};
