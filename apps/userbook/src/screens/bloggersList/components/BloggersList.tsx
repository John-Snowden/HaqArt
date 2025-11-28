"use client";

import { format } from "date-fns";
import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { ROUTES } from "@/constants";
import { translations } from "@/localize";
import { UIIcon, UIListWrapper } from "@/ui";
import { useBloggersListVM } from "@/context";
import { formatSubscribers } from "@shared/utils";

import stylesGlobal from "../../../stylesGlobal.module.css";

export const BloggersList = observer(() => {
  const {
    canWrite,
    isLoading,
    hasBloggers,
    getBloggers,
    selectBloggerId,
    resetSelectedBloggerId,
    root: {
      routerStore,
      bloggersStore: { bloggers },
    },
  } = useBloggersListVM();

  useEffect(() => {
    getBloggers();
  }, [getBloggers]);

  const renderItems = () => {
    return bloggers.map((blogger) => {
      const priceSOM = blogger.priceSOM ? blogger.priceSOM + " SOM" : "-";
      const priceUSD = blogger.priceUSD ? blogger.priceUSD + " USD" : "-";
      const price = priceSOM + " / " + priceUSD;

      const bloggerCategories = blogger.categories
        .map((c) => translations.categories[c])
        .join(", ");

      return (
        <div
          role="button"
          key={blogger.id}
          className={stylesGlobal.itemWrapper}
          onClick={() => selectBloggerId(blogger.id)}
        >
          <div className={stylesGlobal.iconWrapper}>
            <UIIcon size={18} source={"/svg/blogger.svg"} />
          </div>
          <div className={`${stylesGlobal.tableColumn}`}>{blogger.name}</div>
          <div className={`${stylesGlobal.tableColumn}`}>
            {formatSubscribers(blogger.subscribersCount)}
          </div>
          <div className={`${stylesGlobal.tableColumn}`}>{price} </div>
          <div className={`${stylesGlobal.tableColumn}`}>
            {blogger.phoneNumber || "-"}
          </div>
          <div className={`${stylesGlobal.tableColumn}`}>
            {blogger.email || "-"}
          </div>
          <div className={`${stylesGlobal.tableColumn}`}>
            {bloggerCategories}
          </div>
          <div className={`${stylesGlobal.tableColumn}`}>
            {blogger.author.username}
          </div>

          <div className={`${stylesGlobal.tableColumn} `}>
            {format(blogger.createdAt, "d MMMM HH:mm", { locale: ru })}
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
      hasItems={hasBloggers}
      bttnTitle={translations.bttns.addBlogger}
      canWrite={canWrite}
      onAdd={() => {
        resetSelectedBloggerId();
        routerStore.push(ROUTES.EDIT_BLOGGER);
      }}
    >
      {renderItems()}
    </UIListWrapper>
  );
});
