"use client";

import clsx from "clsx";
import { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  times?: number;
  isHorizontal?: boolean;
}

export const UISep: FC<Props> = ({ times = 1, isHorizontal }) => {
  const separators = new Array(Math.round(times)).fill(0);

  return (
    <div>
      {separators.map((_, i) => {
        return (
          <div
            key={i}
            className={clsx(
              times === 0.5 ? styles.halfSep : styles.sep,
              isHorizontal && styles.horizontal,
            )}
          />
        );
      })}
    </div>
  );
};
