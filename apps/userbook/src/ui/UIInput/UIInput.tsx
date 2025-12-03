import { FC } from "react";

import styles from "./styles.module.css";
import { UIIcon } from "../UIIcon/UIIcon";

interface IProps {
  type?: string;
  label?: string;
  value: string | undefined;
  placeholder?: string;
  disabled?: boolean;
  isUpdateOnBlur?: boolean;
  onChange?: (value: string) => void;
  onBlur?(): void;
}

export const UIInput: FC<IProps> = ({
  type,
  label,
  value,
  disabled,
  placeholder,
  onChange,
  onBlur,
}: IProps) => {
  return (
    <div key={label} className={styles.inputWrapper}>
      {label && <h4 className={styles.label}>{label}</h4>}
      <input
        type={type || "text"}
        value={value ?? ""}
        className={styles.input}
        placeholder={placeholder || "..."}
        onChange={(e) => (onChange ? onChange(e.target.value) : {})}
        onBlur={onBlur}
        disabled={disabled}
      />
      {disabled && (
        <div className={styles.iconWrapper}>
          <UIIcon size={14} source={"/svg/lock.svg"} />
        </div>
      )}
    </div>
  );
};
