"use client";

import { observer } from "mobx-react-lite";

import { UIInput, UISep, UITextarea } from "@/ui";
import { translations } from "@/localize";
import { useEditOpponentVM } from "@/context";

import styles from "../styles.module.css";

export const EditOpponentForm = observer(() => {
  const { name, link, info, setName, setLink, setInfo } = useEditOpponentVM();

  return (
    <form className={styles.addWrapper}>
      <div style={{ width: "50%" }}>
        <UIInput
          value={name}
          label={translations.opponent.name}
          onChange={setName}
        />
      </div>
      <div style={{ width: "50%" }}>
        <UIInput
          value={link}
          label={translations.opponent.link}
          onChange={setLink}
        />
      </div>

      <UISep times={2} />
      <div style={{ display: "flex", width: "60%" }}>
        <UITextarea value={info} onChange={setInfo} />
      </div>
    </form>
  );
});
