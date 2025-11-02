"use client";

import clsx from "clsx";
import { FC } from "react";

import { UIIcon } from "../UIIcon/UIIcon";
import stylesGlobal from "../../stylesGlobal.module.css";

interface Props {
  title: string;
  icon?: string;
  iconSize?: number;
  style?: string;
  onClick(): void;
}

export const UIButton: FC<Props> = ({
  title,
  icon,
  iconSize,
  style,
  onClick,
}) => {
  return (
    <button className={clsx(stylesGlobal.bttn, style)} onClick={onClick}>
      {icon && (
        <div style={{ marginRight: 6 }}>
          <UIIcon source={icon} size={iconSize || 14} isInverted />
        </div>
      )}
      {title}
    </button>
  );
};
