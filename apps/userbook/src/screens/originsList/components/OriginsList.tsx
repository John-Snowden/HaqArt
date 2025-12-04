"use client";

import { format } from "date-fns";
import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { ROUTES } from "@/constants/routes";
import { useOriginsListVM } from "@/context";
import { UIIcon, UIListWrapper } from "@/ui";
import { translations } from "@/localize/translations";

import stylesGlobal from "../../../stylesGlobal.module.css";

export const OriginsList = observer(() => {
  const {
    origins,
    canWrite,
    isLoading,
    hasOrigins,
    getOrigins,
    selectOrigin,
    resetSelectedOrigin,
    root: { routerStore },
  } = useOriginsListVM();

  useEffect(() => {
    getOrigins();
  }, [getOrigins]);

  const renderItems = () => {
    return origins.map((origin) => {
      const labels = origin.categories
        .map((category) => translations.categories[category])
        .join(", ");

      return (
        <div
          role="button"
          key={origin.id}
          className={stylesGlobal.itemWrapper}
          onClick={() => {
            selectOrigin(origin.id);
            routerStore.push(ROUTES.EDIT_ORIGIN);
          }}
        >
          <div className={stylesGlobal.iconWrapper}>
            <UIIcon size={20} source={"/svg/origin.svg"} />
          </div>
          <div className={stylesGlobal.tableColumn}>{origin.title}</div>
          <div className={stylesGlobal.tableColumn}>{labels}</div>
          {origin.createdAt && (
            <div className={stylesGlobal.tableColumn}>
              {format(origin.createdAt, "d MMMM HH:mm", { locale: ru })}
            </div>
          )}
          <div className={stylesGlobal.tableColumn}>
            {origin.author.username}
          </div>

          <div className={stylesGlobal.iconWrapper}>
            <UIIcon size={12} source={"/svg/chevronRight.svg"} />
          </div>
        </div>
      );
    });
  };

  return (
    <UIListWrapper
      isLoading={isLoading}
      hasItems={hasOrigins}
      canWrite={canWrite}
      bttnTitle={translations.bttns.addOrigin}
      onAdd={() => {
        resetSelectedOrigin();
        routerStore.push(ROUTES.EDIT_ORIGIN);
      }}
    >
      {renderItems()}
    </UIListWrapper>
  );
});
