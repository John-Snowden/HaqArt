"use client";

import { FC } from "react";
import { format } from "date-fns";

import styles from "./styles.module.css";
import { UIIcon } from "../UIIcon/UIIcon";

interface IProps {
  label: string;
  value: Date | null;
  onChange(d: Date | null): void;
}

export const UIDateTimeInput: FC<IProps> = ({ label, value, onChange }) => {
  return (
    <div className={styles.main}>
      <h4 className={styles.label}>{label}</h4>
      {value && (
        <input
          type={"datetime-local"}
          value={format(new Date(value), "yyyy-MM-dd'T'HH:mm")}
          onChange={(e) => onChange(new Date(e.target.value))}
          className={styles.calendar}
        />
      )}
      <div
        className={styles.calendarIcon}
        onClick={() => {
          onChange(value ? null : new Date());
        }}
      >
        {!value && <div className={styles.dash}>---</div>}
        <UIIcon size={20} source={"/svg/calendar.svg"} />
      </div>
    </div>
  );
};
