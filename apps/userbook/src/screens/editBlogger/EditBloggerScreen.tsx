"use client";

import clsx from "clsx";
import { observer } from "mobx-react-lite";

import { UIButton, UISep } from "@/ui";
import { translations } from "@/localize";
import { useEditBloggerVM } from "@/context";

import styles from "./styles.module.css";
import stylesGlobal from "../../stylesGlobal.module.css";
import { EditBloggerForm } from "./components/EditBloggerForm";

export const EditBloggerScreen = observer(() => {
  const { name, upsertBlogger } = useEditBloggerVM();

  return (
    <>
      <div className={clsx(stylesGlobal.header, stylesGlobal.row)}>
        <h1 className={styles.header}>
          {name || translations.headers.newBlogger}
        </h1>
        <UISep />
        <UIButton
          iconSize={14}
          icon={"/svg/add.svg"}
          title={translations.bttns.add}
          onClick={upsertBlogger}
        />
      </div>
      <EditBloggerForm />
    </>
  );
});
