"use client";

import { FC } from "react";
import Image from "next/image";
import { format } from "date-fns";

import styles from "./styles.module.css";

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
          type="datetime-local"
          value={format(new Date(value), "yyyy-MM-dd'T'HH:mm")}
          onChange={(e) => onChange(new Date(e.target.value))}
          className={styles.calendar}
        />
      )}
      <div
        className={styles.calendarIcon}
        role="button"
        onClick={() => {
          onChange(value ? null : new Date());
        }}
      >
        {!value && <div className={styles.dash}>---</div>}
        <Image
          src={"/svg/calendar.svg"}
          alt="icon"
          width={20}
          height={20}
          priority={false}
        />
      </div>
    </div>
  );
};
