"use client";

import clsx from "clsx";
import { observer } from "mobx-react-lite";

import { UIButton, UISep } from "@/ui";
import { translations } from "@/localize";
import { useEditBloggerVM } from "@/context";

import stylesGlobal from "../../stylesGlobal.module.css";
import { EditBloggerForm } from "./components/EditBloggerForm";

export const EditBloggerScreen = observer(() => {
  const { name, upsertBlogger } = useEditBloggerVM();

  return (
    <div>
      <div className={stylesGlobal.row}>
        <h1 className={stylesGlobal.header}>
          {name || translations.headers.newBlogger}
        </h1>
        <UISep />
        <UIButton title={translations.bttns.add} onClick={upsertBlogger} />
      </div>
      <EditBloggerForm />
    </div>
  );
});
