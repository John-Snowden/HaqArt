"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useEditPersonVM } from "@/context";

import styles from "../styles.module.css";
import { translations } from "@/localize";

export const Contacts = observer(() => {
  const {
    email,
    phoneNumber,
    homeAddress,
    setEmail,
    setPhoneNumber,
    setHomeAddress,
  } = useEditPersonVM();

  return (
    <>
      <div className={styles.inputGroup}>
        <div className={styles.phoneWrapper}>
          <UIInput
            value={phoneNumber}
            style={styles.input}
            label={translations.misc.tel}
            onChange={setPhoneNumber}
          />
        </div>
        <div style={{ width: "40vw" }}>
          <UIInput
            value={email}
            style={styles.input}
            placeholder={"example@email.com"}
            label={translations.person.email}
            onChange={setEmail}
          />
        </div>
      </div>
      <div style={{ width: "50vw" }}>
        <UIInput
          value={homeAddress}
          style={styles.input}
          label={translations.person.homeAddress}
          onChange={setHomeAddress}
        />
      </div>
    </>
  );
});
