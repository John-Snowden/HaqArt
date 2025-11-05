"use client";

import clsx from "clsx";
import Image from "next/image";
import { formatDate } from "date-fns";
import { observer } from "mobx-react-lite";

import { useConstructionComplaintsVM } from "@/context";
import { UIButton, UIInput, UISep, UITextarea } from "@/ui";
import { translations } from "@/localize";

import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";
import { problemFullMaxSize } from "./constructionComplaintsVM";

const registryNumber = Math.random().toFixed(4).split(".")[1];

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
        <h3>{complaints.titleTop[lang]}</h3>
        <h3>{complaints.titleBottom[lang]}</h3>
        <div className={styles.halfSep} />
        <h4>{complaints.subtitle[lang]}</h4>
      </div>

      <UISep />
      <div className={styles.inputWrapper}>
        <UIInput
          placeholder={complaints.yourConstructionCompanyName[lang]}
          value={constructionCompanyName}
          icon="/svg/construction-machine.svg"
          iconSize={16}
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
          iconSize={17}
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
          iconSize={17}
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
        count={problemFull.length}
        maxCount={problemFullMaxSize}
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

        <div style={{ position: "relative" }}>
          <div className={styles.stampWrapper}>
            {complaints.subtitle[lang]} {complaints.stampData[lang]}
            <div className={styles.stamp}>
              <Image
                src={"/images/tashkent_stamp.png"}
                alt="icon"
                width={100}
                height={100}
                priority={false}
              />
            </div>
          </div>

          <h5>
            {complaints.registryNumber[lang]}: 791/
            {registryNumber}
          </h5>
          <h5>
            {complaints.registryDate[lang]}:{" "}
            {formatDate(new Date(), "dd/MM/yyyy")}
          </h5>
        </div>
      </div>

      <UISep />
      <UISep />
      <UISep />
      <UISep />
      <div className={styles.line} />
      <div className={styles.subtitle}>{complaints.footerLine1[lang]}</div>
      <div className={styles.subtitle}>{complaints.footerLine2[lang]}</div>
      <div className={styles.subtitle}>{complaints.footerLine3[lang]}</div>
    </div>
  );
});
