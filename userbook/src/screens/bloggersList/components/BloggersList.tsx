"use client";

import Image from "next/image";
import { format } from "date-fns";
import { useEffect } from "react";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react-lite";

import { ROUTES } from "@/constants/routes";
import { ListWrapper } from "@/ui/listWrapper/ListWrapper";
import { useBloggersListVM } from "../hooks";

import styles from "../styles.module.css";
import { categoryOptions } from "@/screens/addSource/constants/dropdownOptions";

export const BloggersList = observer(() => {
  const {
    root: { routerStore },
    bloggers,
    isLoading,
    hasBloggers,
    managers,
    getBloggers,
    selectBloggerId,
    resetSelectedBloggerId,
  } = useBloggersListVM();

  useEffect(() => {
    getBloggers();
  }, [getBloggers]);

  const formatSubscribers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const renderItems = () => {
    return bloggers.map((blogger) => {
      if (!blogger.id) return <div key={blogger.id}>n/a</div>;
      else {
        const priceSOM = blogger.priceSOM ? blogger.priceSOM + " SOM" : "-";
        const priceUSD = blogger.priceUSD ? blogger.priceUSD + " USD" : "-";
        const price = priceSOM + " / " + priceUSD;

        const categories = blogger.categories.map((category) => {
          const option = categoryOptions.find(
            (categoryOption) => categoryOption.option === category
          );
          return option?.label || "-";
        });

        const authorName =
          managers.find((manager) => manager.id === blogger.authorId)
            ?.username || "-";

        return (
          <div
            key={blogger.id}
            className={styles.itemWrapper}
            role="button"
            onClick={() => selectBloggerId(blogger.id!)}
          >
            <div className={styles.iconWrapper}>
              <Image
                src={"/svg/blogger.svg"}
                alt="icon"
                width={18}
                height={18}
                priority={false}
              />
            </div>
            <div className={`${styles.sourceItem}`}>{blogger.name}</div>
            <div className={`${styles.sourceItem}`}>
              {formatSubscribers(blogger.subscribersCount)}
            </div>
            <div className={`${styles.sourceItem}`}>{price} </div>
            <div className={`${styles.sourceItem}`}>
              {blogger.phoneNumber || "-"}
            </div>
            <div className={`${styles.sourceItem}`}>{blogger.email || "-"}</div>
            <div className={`${styles.sourceItem}`}>
              {categories.join(", ")}
            </div>
            <div className={`${styles.sourceItem}`}>{authorName} </div>

            {blogger.createdAt && (
              <div className={`${styles.sourceItem} `}>
                {format(blogger.createdAt, "d MMMM HH:mm", { locale: ru })}
              </div>
            )}

            <div className={styles.forwardWrapper}>
              <Image
                src={"/svg/chevronRight.svg"}
                alt="icon"
                width={12}
                height={12}
                priority={false}
              />
            </div>
          </div>
        );
      }
    });
  };

  return (
    <ListWrapper
      isLoading={isLoading}
      hasItems={hasBloggers}
      onAdd={() => routerStore.push(ROUTES.EDIT_BLOGGER)}
    >
      {renderItems()}

      <div className={styles.bttnWrapper}>
        <div
          className={styles.bttn}
          role="button"
          onClick={() => {
            resetSelectedBloggerId();
            routerStore.push(ROUTES.EDIT_BLOGGER);
          }}
        >
          <div className={styles.addIcon}>
            <Image
              src={"/svg/add.svg"}
              alt="icon"
              width={26}
              height={26}
              priority={false}
            />
          </div>
          <div>Добавить нового блогера</div>
        </div>
      </div>
    </ListWrapper>
  );
});
