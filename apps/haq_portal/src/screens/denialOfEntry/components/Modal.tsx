"use client";

import clsx from "clsx";
import { FC, ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
  isOpen: boolean;
  onClose(): void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className={clsx(styles.overlay, isOpen && styles.visible)}
      onClick={onClose}
    >
      <div
        className={clsx(styles.modal, isOpen && styles.visible)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
