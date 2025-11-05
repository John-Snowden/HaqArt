"use client";

import clsx from "clsx";
import Image from "next/image";
import { formatDate } from "date-fns";
import { observer } from "mobx-react-lite";

import { translations } from "@/localize";
import { useConstructionComplaintsVM } from "@/context";
import { UIButton, UIInput, UISep, UITextarea } from "@/ui";

import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";

export const ConstructionComplaintsScreen = observer(() => {
  const {
    root: { lang, toggleLang },
    username,
    phoneNumber,
    homeAddress,
    downPayment,
    constructionCompanyName,
    appartmentBlockName,
    problemFull,
    setUsername,
    setPhoneNumber,
    setHomeAddress,
    setProblemFull,
    setDownPayment,
    setConstructionCompanyName,
    setappartmentBlockName,
    sendComplaint,
  } = useConstructionComplaintsVM();

  const formatNumber = (v: bigint | null, separator = " ") =>
    v ? v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : "";

  const { complaints } = translations;

  return (
    <div className={clsx(stylesGlobal.screen, stylesGlobal.center)}>
      <div className={styles.logoWrapper}>
        <div style={{ position: "absolute", right: 0, top: -20 }}>
          <UIButton
            title="Рус/O`z"
            // icon="/svg/update.svg"
            // iconSize={22}
            style={styles.toggleBttn}
            onClick={toggleLang}
          />
        </div>
        <Image
          src={"/images/tashkent.png"}
          alt="icon"
          width={100}
          height={100}
          priority={false}
        />
      </div>

      <UISep />
      <div className={stylesGlobal.center}>
        <h2>{complaints.titleTop[lang]}</h2>
        <h2>{complaints.titleBottom[lang]}</h2>
        <div className={styles.halfSep} />
        <h4>{complaints.subtitle[lang]}</h4>
      </div>

      <UISep />
      <div className={styles.inputWrapper}>
        <UIInput
          placeholder={complaints.yourConstructionCompanyName[lang]}
          value={constructionCompanyName}
          icon="/svg/company.svg"
          onChange={setConstructionCompanyName}
        />
      </div>
      <div className={styles.inputWrapper}>
        <UIInput
          placeholder={complaints.yourAppartmentBlockName[lang]}
          value={appartmentBlockName}
          icon="/svg/house.svg"
          onChange={setappartmentBlockName}
        />
      </div>

      <UISep />
      <div className={styles.inputWrapper}>
        <UIInput
          placeholder={complaints.yourName[lang]}
          value={username}
          icon="/svg/user.svg"
          iconSize={16}
          onChange={setUsername}
        />
      </div>
      <div className={styles.inputWrapper}>
        <UIInput
          placeholder={complaints.yourPhoneNumber[lang]}
          prefix="+(998)"
          value={phoneNumber || ""}
          icon="/svg/phone.svg"
          iconSize={16}
          onChange={setPhoneNumber}
        />
      </div>
      <div className={styles.inputWrapper}>
        <UIInput
          placeholder={complaints.yourHomeAddress[lang]}
          value={homeAddress}
          icon="/svg/location.svg"
          onChange={setHomeAddress}
        />
      </div>
      <div className={styles.inputWrapper}>
        <UIInput
          placeholder={complaints.yourDownPayment[lang]}
          value={formatNumber(downPayment, " ")}
          icon="/svg/dollar.svg"
          iconSize={16}
          onChange={setDownPayment}
        />
      </div>

      <UISep />
      <UISep />
      <div className={styles.subtitle}>
        {complaints.requestTypeComplaint[lang]}
      </div>
      <UITextarea
        value={problemFull}
        placeholder={complaints.fullProblemPlaceholder[lang]}
        onChange={setProblemFull}
      />

      <UISep />
      <div className={styles.buttonWrapper}>
        <UIButton
          title={complaints.send[lang]}
          icon="/svg/telegram.svg"
          onClick={sendComplaint}
          isInverted
        />

        <div>
          <h5>
            {complaints.registryNumber[lang]}: 791/
            {Math.random().toFixed(4).split(".")[1]}
          </h5>
          <h5>
            {complaints.registryDate[lang]}:{" "}
            {formatDate(new Date(), "dd/MM/yyyy")}
          </h5>
        </div>
      </div>

      <UISep />
      <div className={styles.line} />
      <div className={styles.subtitle}>{complaints.footerLine1[lang]}</div>
      <div className={styles.subtitle}>{complaints.footerLine2[lang]}</div>
      <div className={styles.subtitle}>{complaints.footerLine3[lang]}</div>
    </div>
  );
});
