"use client";

import Link from "next/link";
import { observer } from "mobx-react-lite";

import { useEditBloggerVM } from "@/context";
import { formatAmountToStr } from "@shared/utils";
import { translations } from "@/localize/translations";
import { UIIcon, UIInput, UISep, UICategories, UITextarea } from "@/ui";

import styles from "../styles.module.css";
import stylesGlobal from "../../../stylesGlobal.module.css";

export const EditBloggerForm = observer(() => {
  const {
    name,
    link,
    info,
    email,
    canWrite,
    priceSOM,
    priceUSD,
    categories,
    phoneNumber,
    subscribersCount,
    setName,
    setLink,
    setInfo,
    setEmail,
    setPrice,
    setPhoneNumber,
    setCategories,
    setSubscribersCount,
  } = useEditBloggerVM();

  return (
    <>
      <UISep />
      <div className={stylesGlobal.row}>
        <div style={{ width: "40%" }}>
          <UIInput
            value={name}
            style={styles.input}
            label={translations.blogger.name}
            onChange={setName}
          />
        </div>
        <UISep />
        <div style={{ width: "20%" }}>
          <UIInput
            label={translations.blogger.subscribersCount}
            value={formatAmountToStr(subscribersCount, " ")}
            style={styles.input}
            onChange={setSubscribersCount}
          />
        </div>
      </div>

      <div className={stylesGlobal.row}>
        <div style={{ width: "40%" }}>
          <UIInput
            value={link}
            style={styles.input}
            placeholder={"https://..."}
            label={translations.blogger.link}
            onChange={setLink}
          />
        </div>
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
          >
            <UIIcon size={16} source={"/svg/link.svg"} />
          </Link>
        )}
      </div>

      <UISep />
      <div style={{ width: "40%" }}>
        <UIInput
          value={phoneNumber}
          style={styles.input}
          label={translations.misc.tel}
          onChange={setPhoneNumber}
        />
      </div>
      <div style={{ width: "40%" }}>
        <UIInput
          value={email}
          style={styles.input}
          placeholder={"example@email.com"}
          label={translations.blogger.email}
          onChange={setEmail}
        />
      </div>

      <UISep />
      <div style={{ width: "25%" }}>
        <UIInput
          style={styles.input}
          label={translations.legalCase.priceSOM}
          value={formatAmountToStr(priceSOM, " ")}
          onChange={(value) => setPrice("som", value)}
        />
      </div>
      <div style={{ width: "25%" }}>
        <UIInput
          style={styles.input}
          label={translations.legalCase.priceUSD}
          value={formatAmountToStr(priceUSD, " ")}
          onChange={(value) => setPrice("usd", value)}
        />
      </div>

      <UISep times={0.5} />
      <UICategories
        canWrite={canWrite}
        selectedCategories={categories}
        updateCategories={setCategories}
      />

      <UISep times={2} />
      <div style={{ display: "flex", width: "60%" }}>
        <UITextarea rowsCount={10} value={info} onChange={setInfo} />
      </div>
    </>
  );
});
