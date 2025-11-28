"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useEditCaseVM } from "@/context";
import { formatAmountToStr } from "@shared/utils";
import { translations } from "@/localize/translations";

import styles from "../styles.module.css";

export const PriceSection = observer(() => {
  const {
    priceSOM,
    priceUSD,
    setPrice,
    root: {
      authStore: { isSuperRole },
    },
  } = useEditCaseVM();

  return (
    <div>
      <UIInput
        style={styles.input}
        disabled={!isSuperRole}
        label={translations.legalCase.priceSOM}
        value={formatAmountToStr(priceSOM, " ")}
        onChange={(v) => setPrice("som", v)}
      />
      <UIInput
        style={styles.input}
        disabled={!isSuperRole}
        label={translations.legalCase.priceUSD}
        value={formatAmountToStr(priceUSD, " ")}
        onChange={(v) => setPrice("usd", v)}
      />
    </div>
  );
});
