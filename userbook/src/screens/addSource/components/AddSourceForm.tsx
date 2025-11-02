"use client";

import Image from "next/image";
import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { Dropdown } from "@/ui/dropdown/UIDropdown";
import { useAddSourceVm } from "@/app/add_source/page";
import { sourceFieldsLabels } from "@/constants/writableInputFields";

import styles from "../styles.module.css";
import { categoryOptions } from "../constants/dropdownOptions";

export const AddSourceForm = observer(() => {
  const addSourceVm = useAddSourceVm();
  const {
    title,
    category,
    sourceLink,
    setTitle,
    saveSource,
    setCategory,
    setSourceLink,
  } = addSourceVm;

  return (
    <form
      className={styles.addWrapper}
      onSubmit={async (e) => {
        e.preventDefault();
        await saveSource();
      }}
    >
      <div className={styles.inputsWrapper}>
        <UIInput
          type="text"
          label={"Название"}
          value={title || ""}
          placeholder={"..."}
          onChange={(value) => setTitle(value)}
        />
        <UIInput
          type="text"
          label={"Ссылка"}
          value={sourceLink || ""}
          placeholder={"..."}
          onChange={(value) => setSourceLink(value)}
        />
        <Dropdown
          label={sourceFieldsLabels.category}
          value={category}
          options={categoryOptions}
          onClick={setCategory}
        />
      </div>

      <button type="submit" className={styles.fakeBttn}>
        <div className={styles.bttnWrapper} role="button">
          <div className={styles.bttn}>
            <div className={styles.addIcon}>
              <Image
                src={"/svg/add.svg"}
                alt="icon"
                width={26}
                height={26}
                priority={false}
              />
            </div>
            <div>Добавить источник</div>
          </div>
        </div>
      </button>
    </form>
  );
});
