"use client";

import clsx from "clsx";
import { FC } from "react";

import styles from "./styles.module.css";
import { UIIcon } from "../UIIcon/UIIcon";

interface Props {
  type?: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  iconSize?: number;
  style?: string;
  onClick?(): void;
}

export const UIButton: FC<Props> = ({
  type,
  title,
  icon,
  iconSize,
  style,
  onClick,
}) => {
  return (
    <button type={type} className={clsx(styles.bttn, style)} onClick={onClick}>
      {icon && (
        <div style={{ marginRight: 12 }}>
          <UIIcon source={icon} size={iconSize || 14} />
        </div>
      )}
      {title}
    </button>
  );
};
