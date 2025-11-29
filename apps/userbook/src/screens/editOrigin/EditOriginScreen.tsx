"use client";

import clsx from "clsx";

import { ROUTES } from "@/constants";
import { UIButton, UISep } from "@/ui";
import { translations } from "@/localize";
import { observer } from "mobx-react-lite";
import { useEditOriginVM } from "@/context";

import stylesGlobal from "../../stylesGlobal.module.css";
import { EditOriginForm } from "./components/EditOriginForm";

export const EditOriginScreen = observer(() => {
  const {
    title,
    canWrite,
    isUpdateMode,
    upsertOrigin,
    root: { routerStore },
  } = useEditOriginVM();

  return (
    <>
      <div className={clsx(stylesGlobal.header, stylesGlobal.row)}>
        <h1>{title || translations.headers.newOrigin}</h1>
        <UISep />
        {canWrite && (
          <UIButton
            iconSize={14}
            icon="/svg/add.svg"
            title={translations.bttns.save}
            onClick={() => {
              if (canWrite) upsertOrigin();
            }}
          />
        )}
      </div>

      <UISep />
      <EditOriginForm />

      <UISep />
      {isUpdateMode && (
        <UIButton
          iconSize={24}
          icon="/svg/people.svg"
          title={translations.bttns.viewPersons}
          onClick={() => routerStore.push(ROUTES.PERSONS_LIST)}
        />
      )}
    </>
  );
});
