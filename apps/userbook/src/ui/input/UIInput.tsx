import { FC } from "react";

import styles from "./styles.module.css";
import { UIIcon } from "../UIIcon/UIIcon";

interface IProps {
  type?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  style?: string;
  disabled?: boolean;
  withLinkParser?: boolean;
  isUpdateOnBlur?: boolean;
  onChange?: (value: string) => void;
  onBlur?(): void;
}

export const UIInput: FC<IProps> = ({
  type,
  label,
  value,
  style,
  disabled,
  placeholder,
  withLinkParser,
  onChange,
  onBlur,
}: IProps) => {
  const isLink = withLinkParser ? value?.includes("https://") : false;

  return (
    <div key={label} className={styles.inputWrapper}>
      {label && <h4 className={styles.label}>{label}</h4>}
      {isLink ? (
        <a href={value ?? ""} target="_blank" className={styles.link}>
          {value}
        </a>
      ) : (
        <input
          type={type || "text"}
          value={value ?? ""}
          className={`${styles.input} ${style ? style : ""}`}
          placeholder={placeholder || "..."}
          onChange={(e) => (onChange ? onChange(e.target.value) : {})}
          onBlur={onBlur}
          disabled={disabled}
        />
      )}
      {disabled && (
        // TODO ugly style
        <div style={{ marginRight: "92px" }}>
          <UIIcon size={14} source={"/svg/lock.svg"} />
        </div>
      )}
    </div>
  );
};
