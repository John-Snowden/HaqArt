"use client";

import Image from "next/image";
import { FC, useState } from "react";

import styles from "./styles.module.css";

interface IProps {
  label?: string;
  value: string;
  disabled?: boolean;
  options: { option: string; label: string }[];
  onClick(option: string): void;
}

export const Dropdown: FC<IProps> = ({
  label,
  value,
  disabled,
  options,
  onClick,
}) => {
  const [isOpen, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.option === value);

  const renderItems = () => {
    return options.map((option) => {
      return (
        <div
          key={option.option}
          className={styles.itemWrapper}
          role="button"
          onClick={() => onClick(option.option)}
        >
          {option.label}
        </div>
      );
    });
  };

  return (
    <div className={styles.main}>
      {label && <h4 className={styles.label}>{label}</h4>}

      <div
        className={styles.inputWrapper}
        role="button"
        onClick={() => {
          if (disabled) return;
          setOpen(!isOpen);
        }}
      >
        <div className={styles.dropdownLeft}>
          {selectedOption?.label || "-"}
        </div>
        <Image
          src={disabled ? "/svg/lock.svg" : "/svg/chevronDown.svg"}
          alt="icon"
          width={disabled ? 14 : 12}
          height={disabled ? 14 : 12}
          priority={false}
        />

        {isOpen && (
          <div className={styles.dropdownWrapper}>{renderItems()}</div>
        )}
      </div>
    </div>
  );
};
