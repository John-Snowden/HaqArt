"use client";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { translations } from "@/localize";
import { useEditCallVM } from "@/context";
import { CALL_OPTIONS } from "@/stores/constants";
import { UIButton, UIDateTimeInput, UIDropdown, UISep, UITextarea } from "@/ui";

export const EditCallScreen = observer(() => {
  const {
    info,
    callStatus,
    nextDialDate,
    setInfo,
    upsertCall,
    setCallStatus,
    setNextDialDate,
    root: {
      callsStore: { selectedCall },
    },
  } = useEditCallVM();

  const callTitle = selectedCall
    ? format(selectedCall.createdAt, "d MMM yyyy", {
        locale: ru,
      })
    : translations.headers.newCall;
  const callStatusTitle = callStatus
    ? translations.callStatuses[callStatus]
    : "-";

  return (
    <div>
      <UISep times={0.5} />
      <h1>{callTitle}</h1>
      <UISep />
      <div style={{ width: "30%" }}>
        <UIDropdown
          options={CALL_OPTIONS}
          value={callStatusTitle}
          label={translations.headers.callStatus}
          onClick={setCallStatus}
        />
      </div>

      <UISep />
      <UIDateTimeInput
        value={nextDialDate}
        label={translations.misc.redial}
        onChange={setNextDialDate}
      />

      <UISep />
      <div style={{ width: "50%" }}>
        <UITextarea rowsCount={12} value={info} onChange={setInfo} />
      </div>

      <UISep />
      <UIButton title={translations.bttns.save} onClick={upsertCall} />
    </div>
  );
});
