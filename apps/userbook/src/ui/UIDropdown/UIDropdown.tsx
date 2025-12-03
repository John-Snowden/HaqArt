"use client";

import { FC, useEffect, useState } from "react";

import { DropdownOption } from "@/stores/constants";

import styles from "./styles.module.css";
import { UIIcon } from "../UIIcon/UIIcon";

interface IProps {
  label?: string;
  value: string | undefined;
  emptyValue?: string;
  disabled?: boolean;
  isValueRequired?: boolean;
  options: DropdownOption<unknown>[];
  onClick(option: string | undefined): void;
}

export const UIDropdown: FC<IProps> = ({
  label,
  value,
  emptyValue,
  disabled,
  options,
  isValueRequired,
  onClick,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [viewport, setViewport] = useState(0);
  const [isBelowViewport, setBelowViewport] = useState(false);

  const ITEM_HEIGHT = 50;
  const OFFSET = 50;
  const dropdownListHeight = options?.length * ITEM_HEIGHT;

  useEffect(() => {
    setViewport(window.innerHeight);
  }, []);

  const renderItems = () => {
    return options?.map((option) => {
      return (
        <div
          role="button"
          key={option.option as string}
          className={styles.itemWrapper}
          onClick={() => onClick(option.option as string)}
        >
          {option.value}
        </div>
      );
    });
  };

  return (
    <div className={styles.main}>
      {label && <h4 className={styles.label}>{label}</h4>}

      <div
        role="button"
        className={styles.inputWrapper}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          const el = e.currentTarget;
          const rect = el.getBoundingClientRect();
          setBelowViewport(
            rect.bottom + dropdownListHeight + OFFSET > viewport,
          );
          if (!disabled) setOpen(!isOpen);
        }}
      >
        <div className={styles.dropdownLeft}>{value}</div>
        <UIIcon
          size={disabled ? 14 : 12}
          source={disabled ? "/svg/lock.svg" : "/svg/chevronDown.svg"}
        />

        {isOpen && (
          <>
            <div className={styles.overlay} onClick={() => setOpen(false)} />
            <div
              className={
                isBelowViewport
                  ? styles.dropdownWrapperUp
                  : styles.dropdownWrapper
              }
            >
              {!isValueRequired && (
                <div
                  key="none"
                  role="button"
                  className={styles.itemWrapper}
                  onClick={() => onClick(undefined)}
                >
                  {emptyValue || "-"}
                </div>
              )}
              {renderItems()}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
