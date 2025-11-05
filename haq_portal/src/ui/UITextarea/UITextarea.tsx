"use client";

import { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  placeholder: string;
  value: string;
  onChange(v: string): void;
}

export const UITextarea: FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      rows={6}
      placeholder={placeholder}
      value={value}
      className={styles.textArea}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
