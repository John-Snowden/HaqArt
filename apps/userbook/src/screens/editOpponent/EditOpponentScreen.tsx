"use client";

import clsx from "clsx";

import { UIButton, UISep } from "@/ui";
import { translations } from "@/localize";
import { useEditOpponentVM } from "@/context";

import stylesGlobal from "../../stylesGlobal.module.css";
import { EditOpponentForm } from "./components/EditOpponentForm";

export const EditOpponentScreen = () => {
  const { name, upsertOpponent } = useEditOpponentVM();

  return (
    <div>
      <div className={clsx(stylesGlobal.header, stylesGlobal.row)}>
        <h1>{name || translations.headers.newOpponent}</h1>
        <UISep />
        <UIButton title={translations.bttns.save} onClick={upsertOpponent} />
      </div>

      <UISep />
      <EditOpponentForm />
    </div>
  );
};
