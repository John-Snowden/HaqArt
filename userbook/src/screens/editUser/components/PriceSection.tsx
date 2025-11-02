"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useEditUserVM } from "@/app/edit_user/page";
import { userFieldLabels } from "@/constants/writableInputFields";

import styles from "../styles.module.css";

export const PriceSection = observer(() => {
  const { priceSOM, priceUSD, isSuperRole, setPriceSOM, setPriceUSD } =
    useEditUserVM();

  const formatNumber = (v: bigint | null, separator = " ") =>
    v ? v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : "";

  return (
    <>
      <div style={{ width: "30vw" }}>
        <UIInput
          disabled={!isSuperRole}
          type="text"
          label={userFieldLabels.priceSOM}
          value={formatNumber(priceSOM, " ")}
          style={styles.input}
          placeholder={"..."}
          onChange={setPriceSOM}
        />
      </div>
      <div style={{ width: "30vw" }}>
        <UIInput
          disabled={!isSuperRole}
          type="text"
          label={userFieldLabels.priceUSD}
          value={formatNumber(priceUSD, " ")}
          style={styles.input}
          placeholder={"..."}
          onChange={setPriceUSD}
        />
      </div>
    </>
  );
});
