"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { translations } from "@/localize";
import { useEditPersonVM } from "@/context";

import stylesGlobal from "../../../stylesGlobal.module.css";

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
    <div className={stylesGlobal.flexAllVertical}>
      <div style={{ width: "60%" }}>
        <UIInput
          value={phoneNumber}
          label={translations.misc.tel}
          onChange={setPhoneNumber}
        />
      </div>
      <div style={{ width: "60%" }}>
        <UIInput
          value={email}
          placeholder={"example@email.com"}
          label={translations.person.email}
          onChange={setEmail}
        />
      </div>
      <div style={{ width: "90%" }}>
        <UIInput
          value={homeAddress}
          label={translations.person.homeAddress}
          onChange={setHomeAddress}
        />
      </div>
    </div>
  );
});
