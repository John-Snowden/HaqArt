"use client";

import { translations } from "@/localize";

import stylesGlobal from "../../stylesGlobal.module.css";
import { BloggersList } from "./components/BloggersList";

export const BloggersListScreen = () => {
  return (
    <>
      <div className={stylesGlobal.header}>
        <h1>{translations.headers.allBloggers}</h1>
      </div>

      <div className={stylesGlobal.tableHeader}>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.blogger.name}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.blogger.subscribersCount}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {`${translations.misc.price} ${translations.blogger.priceSOM}/${translations.blogger.priceUSD}`}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.blogger.phoneNumber}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.blogger.email}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.blogger.categories}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.blogger.authorId}
        </h4>
        <h4 className={stylesGlobal.tableColumn}>
          {translations.misc.createdAt}
        </h4>
      </div>
      <BloggersList />
    </>
  );
};
