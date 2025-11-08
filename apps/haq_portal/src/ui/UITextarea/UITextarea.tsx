"use client";

import { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  placeholder: string;
  value: string;
  count?: number;
  maxCount?: number;
  onChange(v: string): void;
}

export const UITextarea: FC<Props> = ({
  placeholder,
  value,
  count,
  maxCount,
  onChange,
}) => {
  return (
    <div className={styles.textAreaWrapper}>
      <textarea
        rows={6}
        placeholder={placeholder}
        value={value}
        className={styles.textArea}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className={styles.counter}>{`${count} / ${maxCount}`}</div>
    </div>
  );
};
