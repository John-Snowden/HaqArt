"use client";

import { observer } from "mobx-react-lite";

import { translations } from "@/localize";
import { useEditPersonVM } from "@/context";

import stylesGlobal from "../../../stylesGlobal.module.css";

export const AppointmentsList = observer(() => {
  const {} = useEditPersonVM();

  const renderItems = () => {
    return [0, 1, 2].map((a) => {
      return <div key={a}>appointment</div>;
    });
  };

  return (
    <div className={stylesGlobal.flexAllVertical}>
      <h1>{translations.headers.appointments}</h1>
      {renderItems()}
    </div>
  );
});
