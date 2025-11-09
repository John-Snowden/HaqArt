"use client";

import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import { UISep } from "@/ui/UISep/UISep";
import { translations } from "@/localize";
import { UIIcon } from "@/ui/UIIcon/UIIcon";
import { useDenialOfEntryVM } from "@/context/DenialOfEntry";
import { ConstructionRdirectBttn } from "./ConstructionRdirect";

import { Modal } from "./Modal";

export const ConstructionModal = observer(() => {
  const {
    root: { lang },
  } = useDenialOfEntryVM();

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  }, [setVisible]);

  return (
    <Modal isOpen={isVisible} onClose={() => setVisible(false)}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <UIIcon source="/svg/message.svg" size={20} />
        <h3 style={{ marginLeft: 12 }}>
          {translations.denialOfEntry.title[lang]}
        </h3>
      </div>
      <UISep />
      <div>{translations.denialOfEntry.subtitle[lang]}</div>
      <UISep />
      <div>{translations.denialOfEntry.content[lang]}</div>
      <UISep />
      <ConstructionRdirectBttn />
    </Modal>
  );
});
