"use client";

import Link from "next/link";
import { observer } from "mobx-react-lite";

import { UIIcon, UIInput } from "@/ui";
import { useEditPersonVM } from "@/context";
import { translations } from "@/localize/translations";

import styles from "../styles.module.css";
import stylesGlobal from "../../../stylesGlobal.module.css";

export const BasicInfo = observer(() => {
  const { name, link, setName, setLink } = useEditPersonVM();

  return (
    <div className={stylesGlobal.flexAllVertical}>
      <div style={{ display: "flex", width: "50%" }}>
        <div style={{ flex: 1 }}>
          <UIInput
            value={name}
            label={translations.person.name}
            onChange={setName}
          />
        </div>
      </div>
      <div style={{ display: "flex", width: "80%" }}>
        <div style={{ flex: 1 }}>
          <UIInput
            value={link}
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
