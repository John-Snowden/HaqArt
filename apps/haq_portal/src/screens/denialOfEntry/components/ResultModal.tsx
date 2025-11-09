"use client";

import Image from "next/image";
import { observer } from "mobx-react-lite";

import { UISep } from "@/ui/UISep/UISep";
import { translations } from "@/localize";
import { UIIcon } from "@/ui/UIIcon/UIIcon";
import { useDenialOfEntryVM } from "@/context/DenialOfEntry";

import { Modal } from "./Modal";
import { UIButton, UIInput } from "@/ui";

export const ResultModal = observer(() => {
  const {
    root: { lang },
    deniedStatus,
    setDeniedStatus,
  } = useDenialOfEntryVM();

  return (
    <Modal
      isOpen={deniedStatus !== undefined}
      onClose={() => setDeniedStatus(undefined)}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <UIIcon
          source={deniedStatus ? "/svg/letter.svg" : "/svg/exclamation.svg"}
          size={20}
        />
        <h3 style={{ marginLeft: 12 }}>
          {
            translations.denialOfEntry[
              deniedStatus ? "resultTitleGood" : "resultTitleBad"
            ][lang]
          }
        </h3>
      </div>
      <UISep />
      <div>{translations.denialOfEntry.resultContactUs1[lang]}</div>
      <div>{translations.denialOfEntry.resultContactUs2[lang]}</div>
      <UISep />
      <div>{translations.denialOfEntry.resultContactUs3[lang]}</div>
      <div>{translations.denialOfEntry.resultContactUs4[lang]}</div>
      <div>{translations.denialOfEntry.paidService[lang]}</div>
      <UISep />
      <Image
        src={"/images/example1.png"}
        alt="icon"
        width={100}
        height={100}
        priority={false}
      />
      <Image
        src={"/images/example2.png"}
        alt="icon"
        width={100}
        height={100}
        priority={false}
      />

      <UISep />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "70%",
        }}
      >
        <div style={{ width: 60, paddingTop: 8 }}>+(998)</div>
        <UIInput
          value=""
          placeholder={translations.denialOfEntry.enterYourPhoneNumber[lang]}
          onChange={() => {}}
        />
      </div>
      <UISep />
      <UIButton
        title="Связаться"
        icon="/svg/phone.svg"
        isInverted
        onClick={() => {}}
      />
    </Modal>
  );
});
