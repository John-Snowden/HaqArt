"use client";

import { FC } from "react";

import styles from "./styles.module.css";
import { UIIcon } from "../UIIcon/UIIcon";
import clsx from "clsx";

interface Props {
  title: string;
  icon?: string;
  iconSize?: number;
  style?: string;
  isInverted?: boolean;
  onClick(): void;
}

export const UIButton: FC<Props> = ({
  title,
  style,
  icon,
  iconSize,
  isInverted,
  onClick,
}) => {
  return (
    <button className={clsx(styles.bttn, style)} onClick={onClick}>
      {icon && (
        <div style={{ marginRight: 6 }}>
          <UIIcon source={icon} size={iconSize || 14} isInverted={isInverted} />
        </div>
      )}
      {title}
    </button>
  );
};
