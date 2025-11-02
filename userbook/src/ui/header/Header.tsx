"use client";

import Link from "next/link";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { usePathname } from "next/navigation";

import { ROUTES } from "@/constants/routes";
import { useRootStore } from "@/app/RootClientContext";

import styles from "./styles.module.css";

const noHeaderRoutes = [ROUTES.ROOT, ROUTES.AUTH];
const noBackButtonRoutes = [...noHeaderRoutes, ROUTES.SOURCES_LIST];

export const Header = observer(() => {
  const {
    routerStore: { currentRoute, push, back },
    authStore: { isSuperRole },
  } = useRootStore();

  const route = usePathname();
  const isSourcesListScreen = route.includes(ROUTES.SOURCES_LIST);
  const isDeskScreen = route.includes(ROUTES.DESK);
  const isOpponentsScreen = route.includes(ROUTES.OPPONENTS_LIST);
  const isBloggersScreen = route.includes(ROUTES.BLOGGERS_LIST);

  const isShowBackButton =
    !noBackButtonRoutes.includes(route as ROUTES) &&
    currentRoute !== ROUTES.ROOT;
  const isShowSources = !isSourcesListScreen;
  const isShowOpponents = isSuperRole && !isOpponentsScreen;
  const isShowBloggers = !isBloggersScreen;

  if (noHeaderRoutes.includes(route as ROUTES)) return null;

  return (
    <div className={styles.main}>
      <div className={styles.headerLeft}>
        {isShowBackButton && (
          <div role="button" onClick={back}>
            <div className={styles.buttonWrapper}>
              <Image
                src={"/svg/back.svg"}
                alt="icon"
                width={24}
                height={24}
                priority={false}
              />
              <div className={styles.margLeft}>
                <h3>Назад</h3>
              </div>
            </div>
          </div>
        )}
      </div>

      {!isDeskScreen && (
        <Link href={ROUTES.DESK} className={styles.buttonWrapper}>
          <h3 className={styles.margRight}>Мои задачи</h3>
          <Image
            src={"/svg/tasks.svg"}
            alt="icon"
            width={20}
            height={20}
            priority={false}
          />
        </Link>
      )}
      {isShowSources && (
        <Link
          href={ROUTES.SOURCES_LIST}
          className={styles.buttonWrapper}
          onClick={() => push(ROUTES.SOURCES_LIST)}
        >
          <h3 className={styles.margRight}>Все источники</h3>
          <Image
            src={"/svg/sources.svg"}
            alt="icon"
            width={22}
            height={22}
            priority={false}
          />
        </Link>
      )}

      {isShowOpponents && (
        <Link href={ROUTES.OPPONENTS_LIST} className={styles.buttonWrapper}>
          <h3 className={styles.margRight}>Все оппоненты</h3>
          <Image
            src={"/svg/opponent.svg"}
            alt="icon"
            width={24}
            height={24}
            priority={false}
          />
        </Link>
      )}

      {isShowBloggers && (
        <Link href={ROUTES.BLOGGERS_LIST} className={styles.buttonWrapper}>
          <h3 className={styles.margRight}>Все блоггеры</h3>
          <Image
            src={"/svg/blogger.svg"}
            alt="icon"
            width={20}
            height={20}
            priority={false}
          />
        </Link>
      )}

      {/* <div className={styles.buttonWrapper} onClick={logout}>
        <h3 className={styles.margRight}>Выход</h3>
        <Image
          src={"/svg/logout.svg"}
          alt="icon"
          width={28}
          height={28}
          priority={false}
        />
      </div> */}

      {/* {!isProfileScreen && (
        <div
          className={styles.buttonWrapper}
          onClick={() => push(ROUTES.PROFILE)}
        >
          <h3 className={styles.margRight}>Профиль</h3>
          <Image
            src={"/svg/settings.svg"}
            alt="icon"
            width={30}
            height={30}
            priority={false}
          />
        </div>
      )} */}
    </div>
  );
});
