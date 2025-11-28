"use client";

import Link from "next/link";
import { observer } from "mobx-react-lite";

import { UIIcon, UIInput } from "@/ui";
import { useEditPersonVM } from "@/context";
import { translations } from "@/localize/translations";

import styles from "../styles.module.css";

export const BasicInfo = observer(() => {
  const { name, link, setName, setLink } = useEditPersonVM();

  return (
    <div className={styles.inputGroup}>
      <div style={{ width: "35vw" }}>
        <UIInput
          value={name}
          style={styles.input}
          label={translations.person.name}
          onChange={setName}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "40vw",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <UIInput
            value={link}
            style={styles.input}
            placeholder={"https://..."}
            label={translations.person.link}
            onChange={setLink}
          />
        </div>
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            className={styles.bttn}
          >
            <UIIcon size={16} source={"/svg/link.svg"} />
          </Link>
        )}
      </div>
    </div>
  );
});
