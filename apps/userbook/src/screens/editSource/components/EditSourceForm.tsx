"use client";

import Image from "next/image";
import { observer } from "mobx-react-lite";

import { ROUTES } from "@/constants/routes";
import { UIButton, UIInput, UISep } from "@/ui";
import { Dropdown } from "@/ui/dropdown/UIDropdown";
import { useEditSourceVM } from "@/app/edit_source/page";
import { sourceFieldsLabels } from "@/constants/writableInputFields";

import styles from "../styles.module.css";
import { categoryOptions } from "../constants/dropdownOptions";

export const EditSourceForm = observer(() => {
  const {
    title,
    category,
    sourceLink,
    selectedSource,
    root: { routerStore },
    isDev,
    setTitle,
    saveSource,
    updateSource,
    setCategory,
    setSourceLink,
  } = useEditSourceVM();

  const isUpdate = isDev && selectedSource;

  return (
    <form
      className={styles.addWrapper}
      onSubmit={async (e) => {
        e.preventDefault();
        if (isUpdate) await updateSource();
        else await saveSource();
      }}
    >
      <div className={styles.inputsWrapper}>
        <UIInput
          disabled={!isDev}
          type="text"
          label={"Название"}
          value={title || ""}
          placeholder={"..."}
          onChange={(value) => setTitle(value)}
        />
        <UIInput
          disabled={!isDev}
          type="text"
          label={"Ссылка"}
          value={sourceLink || ""}
          placeholder={"..."}
          onChange={(value) => setSourceLink(value)}
        />
        <Dropdown
          disabled={!isDev}
          label={sourceFieldsLabels.category}
          value={category}
          options={categoryOptions}
          onClick={setCategory}
        />
      </div>

      <UISep />
      {isUpdate && (
        <UIButton
          type="submit"
          title="Обновить источник"
          icon="/svg/add.svg"
          iconSize={26}
        />
      )}
      {selectedSource ? (
        <UIButton
          title="Показать пользователей"
          icon="/svg/people.svg"
          iconSize={26}
          onClick={() => routerStore.push(ROUTES.USERS_LIST)}
        />
      ) : (
        <UIButton
          type="submit"
          title="Добавить источник"
          icon="/svg/add.svg"
          iconSize={26}
        />
      )}
    </form>
  );
});
