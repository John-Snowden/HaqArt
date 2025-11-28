"use client";

import Link from "next/link";
import { observer } from "mobx-react-lite";
import { usePathname } from "next/navigation";

import { useRootStore } from "@/context";
import { ROUTES } from "@/constants/routes";

import styles from "./styles.module.css";
import { UIIcon } from "../UIIcon/UIIcon";
import { translations } from "@/localize";

const noHeaderRoutes = [ROUTES.ROOT, ROUTES.AUTH];
const noBackButtonRoutes = [...noHeaderRoutes, ROUTES.ORIGINS_LIST];

export const Header = observer(() => {
  const {
    routerStore: { currentRoute, back },
    authStore: { isSuperRole, logout },
  } = useRootStore();

  const route = usePathname();
  const isOriginsListScreen = route.includes(ROUTES.ORIGINS_LIST);
  const isCasesListScreen = route.includes(ROUTES.CASES_LIST);
  const isOpponentsScreen = route.includes(ROUTES.OPPONENTS_LIST);
  const isBloggersScreen = route.includes(ROUTES.BLOGGERS_LIST);

  const isShowBackButton =
    !noBackButtonRoutes.includes(route as ROUTES) &&
    currentRoute !== ROUTES.ROOT;
  const isShowOrigins = !isOriginsListScreen;
  const isShowOpponents = isSuperRole && !isOpponentsScreen;
  const isShowBloggers = !isBloggersScreen;

  if (noHeaderRoutes.includes(route as ROUTES)) return null;

  return (
    <div className={styles.main}>
      <div className={styles.headerLeft}>
        {isShowBackButton && (
          <div role="button" onClick={back}>
            <div className={styles.buttonWrapper}>
              <UIIcon size={24} source={"/svg/back.svg"} />
              <div className={styles.margLeft}>
                <h3>Назад</h3>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.headerRight}>
        {!isCasesListScreen && (
          <Link href={ROUTES.CASES_LIST} className={styles.buttonWrapper}>
            <h3 className={styles.margRight}>{translations.headers.myCases}</h3>
            <UIIcon size={20} source={"/svg/case.svg"} />
          </Link>
        )}
        {isShowOrigins && (
          <Link href={ROUTES.ORIGINS_LIST} className={styles.buttonWrapper}>
            <h3 className={styles.margRight}>Все источники</h3>
            <UIIcon size={22} source={"/svg/origins.svg"} />
          </Link>
        )}

        {isShowOpponents && (
          <Link href={ROUTES.OPPONENTS_LIST} className={styles.buttonWrapper}>
            <h3 className={styles.margRight}>Все оппоненты</h3>
            <UIIcon size={24} source={"/svg/opponent.svg"} />
          </Link>
        )}

        {isShowBloggers && (
          <Link href={ROUTES.BLOGGERS_LIST} className={styles.buttonWrapper}>
            <h3 className={styles.margRight}>Все блоггеры</h3>
            <UIIcon size={20} source={"/svg/blogger.svg"} />
          </Link>
        )}

        <div className={styles.buttonWrapper} onClick={logout}>
          <h3 className={styles.margRight}>Выход</h3>
          <UIIcon size={25} source={"/svg/logout.svg"} />
        </div>

        {/* {!isProfileScreen && (
        <div
          className={styles.buttonWrapper}
          onClick={() => push(ROUTES.PROFILE)}
        >
          <h3 className={styles.margRight}>Профиль</h3>
          <UIIcon size={30} source={"/svg/settings.svg"} />
        </div>
      )} */}
      </div>
    </div>
  );
});
