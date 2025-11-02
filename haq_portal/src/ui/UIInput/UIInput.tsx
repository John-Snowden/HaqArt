"use client";

import { FC } from "react";

import styles from "./styles.module.css";
import { UIIcon } from "../UIIcon/UIIcon";

interface Props {
  label?: string;
  value: string;
  icon?: string;
  iconSize?: number;
  placeholder: string;
  onChange(value: string): void;
}

export const UIInput: FC<Props> = ({
  label,
  value,
  icon,
  iconSize,
  placeholder,
  onChange,
}) => {
  return (
    <div className={styles.inputWrapper}>
      {label}
      {icon && (
        <div>
          <UIIcon source={icon} size={iconSize} />
        </div>
      )}
      <input
        type={"text"}
        value={value}
        className={styles.input}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
