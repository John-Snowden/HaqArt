"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useEditUserVM } from "@/app/edit_user/page";

import styles from "../styles.module.css";

export const Contacts = observer(() => {
  const editUserVM = useEditUserVM();
  const {
    phoneNumber,
    homeAddress,
    email,
    setPhoneNumber,
    setHomeAddress,
    setEmail,
  } = editUserVM;

  return (
    <>
      <div className={styles.inputGroup}>
        <div className={styles.phoneWrapper}>
          <UIInput
            key={"Номер телефона"}
            type="text"
            label={`Номер телефона +(998)`}
            value={phoneNumber || ""}
            style={styles.input}
            placeholder={"..."}
            onChange={setPhoneNumber}
          />
        </div>
        <div style={{ width: "40vw" }}>
          <UIInput
            key={"Почта"}
            type="text"
            label={"Почта"}
            value={email || ""}
            style={styles.input}
            placeholder={"example@email.com"}
            onChange={setEmail}
          />
        </div>
      </div>
      <div style={{ width: "75vw" }}>
        <UIInput
          key={"Адрес"}
          type="text"
          label={"Адрес"}
          value={homeAddress}
          style={styles.input}
          placeholder={"..."}
          onChange={setHomeAddress}
        />
      </div>
    </>
  );
});
