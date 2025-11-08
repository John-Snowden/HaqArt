"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { SOURCE_CATEGORY } from "@shared/prisma/prisma/client";
import { userFieldLabels } from "@/constants/writableInputFields";
import { useEditBloggerVM } from "../hooks";

import styles from "../styles.module.css";
import Link from "next/link";
import Image from "next/image";

const categoryOptions: { option: SOURCE_CATEGORY; label: string }[] = [
  { option: SOURCE_CATEGORY.none, label: "-" },
  { option: SOURCE_CATEGORY.loans, label: "кредиты" },
  { option: SOURCE_CATEGORY.realEstate, label: "строительство" },
  { option: SOURCE_CATEGORY.other, label: "другое" },
];

export const EditBloggerForm = observer(() => {
  const editBloggerVM = useEditBloggerVM();
  const {
    name,
    link,
    subscribersCount,
    info,
    priceSOM,
    priceUSD,
    phoneNumber,
    email,
    categories,
    setName,
    setLink,
    setSubscribersCount,
    setInfo,
    setPriceSOM,
    setPriceUSD,
    setPhoneNumber,
    setEmail,
    setCategories,
  } = editBloggerVM;

  const handleCategoryChange = (category: SOURCE_CATEGORY) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  const formatNumber = (v: number | null, separator = " ") =>
    v ? v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : "";

  return (
    <div className={styles.inputsWrapper}>
      <div className={styles.inputGroup}>
        <div style={{ width: "34vw" }}>
          <UIInput
            type="text"
            label={"Имя блогера"}
            value={name || ""}
            style={styles.input}
            placeholder={"..."}
            onChange={(value) => setName(value)}
          />
        </div>
        <div style={{ width: "24vw" }}>
          <UIInput
            type="text"
            label={"Количество подписчиков"}
            value={formatNumber(subscribersCount, " ")}
            style={styles.input}
            placeholder={"..."}
            onChange={(value) => {
              const numValue = value.replace(/\s/g, "");
              setSubscribersCount(parseInt(numValue) || 0);
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "42vw" }}>
          <UIInput
            type="text"
            label={"Ссылка"}
            value={link || ""}
            style={styles.input}
            placeholder={"https://..."}
            onChange={(value) => setLink(value)}
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
            <Image
              src={"/svg/link.svg"}
              alt="icon"
              width={16}
              height={16}
              priority={false}
            />
          </Link>
        )}
      </div>

      <div className={styles.inputGroupColumn}>
        <h4 className={styles.label}>Категории</h4>
        <div className={styles.categoriesWrapper}>
          {categoryOptions.map((option) => {
            if (option.option === "none") return null;
            return (
              <div
                key={option.option}
                className={`${styles.categoryItem} ${
                  categories.includes(option.option) ? styles.selected : ""
                }`}
                onClick={() => handleCategoryChange(option.option)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.sep} />

      <div style={{ width: "32vw" }}>
        <UIInput
          type="text"
          label={`Номер телефона +(998)`}
          value={phoneNumber || ""}
          style={styles.input}
          placeholder={"..."}
          onChange={(value) => setPhoneNumber(value)}
        />
      </div>
      <div style={{ width: "32vw" }}>
        <UIInput
          type="email"
          label={"Email"}
          value={email || ""}
          style={styles.input}
          placeholder={"example@email.com"}
          onChange={(value) => setEmail(value)}
        />
      </div>

      <div className={styles.sep} />

      <div style={{ width: "22vw" }}>
        <UIInput
          type="text"
          label={userFieldLabels.priceSOM}
          value={formatNumber(priceSOM, " ")}
          style={styles.input}
          placeholder={"..."}
          onChange={(value) => {
            const numValue = value.replace(/\s/g, "");
            setPriceSOM(numValue ? parseInt(numValue) : null);
          }}
        />
      </div>
      <div style={{ width: "22vw" }}>
        <UIInput
          type="text"
          label={userFieldLabels.priceUSD}
          value={formatNumber(priceUSD, " ")}
          style={styles.input}
          placeholder={"..."}
          onChange={(value) => {
            const numValue = value.replace(/\s/g, "");
            setPriceUSD(numValue ? parseInt(numValue) : null);
          }}
        />
      </div>

      <div className={styles.sep} />

      <div className={styles.sep} />

      <div className={styles.inputGroupColumn}>
        <textarea
          rows={16}
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          className={styles.fullProblemWrapper}
          placeholder="Остальная информация"
        />
      </div>
    </div>
  );
});
