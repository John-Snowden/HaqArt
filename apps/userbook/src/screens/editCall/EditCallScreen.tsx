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
    redialDate,
    setInfo,
    upsertCall,
    setCallStatus,
    setRedialDate,
    root: {
      callsStore: { selectedCall },
    },
    // selectedOption,
  } = useEditCallVM();

  const callTitle = selectedCall
    ? format(selectedCall.createdAt, "d MMM yyyy", {
        locale: ru,
      })
    : translations.headers.newCall;
  const callStatusTitle = callStatus
    ? translations.callStatuses[callStatus]
    : "-";

  // const selectedCaseOption = selectedOption?.value || "-";

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
      {/*<div style={{ width: "50%" }}>
        <UIDropdown
          options={casesOptions}
          value={selectedCaseOption}
          label={translations.misc.case}
          onClick={setCaseId}
        />
      </div>*/}

      <UISep />
      <UIDateTimeInput
        value={redialDate}
        label={translations.misc.redial}
        onChange={setRedialDate}
      />

      <UISep />
      <div style={{ width: "50%" }}>
        <UITextarea rowsCount={12} value={info} onChange={setInfo} />
      </div>

      <UISep />
      <UIButton title={translations.bttns.add} onClick={upsertCall} />
    </div>
  );
});
