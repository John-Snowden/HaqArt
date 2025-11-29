"use client";

import Link from "next/link";
import { observer } from "mobx-react-lite";
import { usePathname } from "next/navigation";

import { useRootStore } from "@/context";
import { translations } from "@/localize";
import { ROUTES } from "@/constants/routes";
import { capitalizeName } from "@shared/utils";
import { ROLE } from "@shared/prisma/prisma/client";

import styles from "./styles.module.css";
import { UIIcon } from "../UIIcon/UIIcon";

const noHeaderRoutes = [ROUTES.ROOT, ROUTES.AUTH];

export const UIHeader = observer(() => {
  const {
    routerStore: { back },
    authStore: { me, logout },
  } = useRootStore();

  const route = usePathname();
  const isShowBackButton = !noHeaderRoutes.includes(route as ROUTES);

  const isShowCases = [ROLE.DEV, ROLE.OWNER, ROLE.CEO, ROLE.LAWYER].find((r) =>
    me?.roles.includes(r),
  );
  const isShowLeads = [
    ROLE.DEV,
    ROLE.OWNER,
    ROLE.CEO,
    ROLE.SALES_MANAGER,
    ROLE.ACCOUNT_MANAGER,
  ].find((r) => me?.roles.includes(r));

  const isShowOpponents = [ROLE.DEV, ROLE.OWNER, ROLE.CEO, ROLE.LAWYER].find(
    (r) => me?.roles.includes(r),
  );
  const isShowBloggers = [
    ROLE.DEV,
    ROLE.OWNER,
    ROLE.CEO,
    ROLE.SMM_MANAGER,
  ].find((r) => me?.roles.includes(r));

  if (noHeaderRoutes.includes(route as ROUTES)) return null;

  return (
    <div className={styles.main}>
      <div className={styles.headerLeft}>
        {isShowBackButton && (
          <div role="button" onClick={back}>
            <div className={styles.buttonWrapper}>
              <UIIcon size={24} source={"/svg/back.svg"} />
              <div className={styles.margLeft}>
                <h3>{translations.bttns.back}</h3>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.headerRight}>
        {isShowCases && (
          <Link href={ROUTES.CASES_LIST} className={styles.buttonWrapper}>
            <h3 className={styles.margRight}>{translations.headers.myCases}</h3>
            <UIIcon size={20} source={"/svg/case.svg"} />
          </Link>
        )}

        {isShowLeads && (
          <Link href={ROUTES.ORIGINS_LIST} className={styles.buttonWrapper}>
            <h3 className={styles.margRight}>
              {translations.headers.allLeads}
            </h3>
            <UIIcon size={22} source={"/svg/origins.svg"} />
          </Link>
        )}

        {isShowOpponents && (
          <Link href={ROUTES.OPPONENTS_LIST} className={styles.buttonWrapper}>
            <h3 className={styles.margRight}>
              {translations.headers.allOpponents}
            </h3>
            <UIIcon size={24} source={"/svg/opponent.svg"} />
          </Link>
        )}

        {isShowBloggers && (
          <Link href={ROUTES.BLOGGERS_LIST} className={styles.buttonWrapper}>
            <h3 className={styles.margRight}>
              {translations.headers.allBloggers}
            </h3>
            <UIIcon size={20} source={"/svg/blogger.svg"} />
          </Link>
        )}

        <h3 style={{ padding: "0 16px" }}>
          {me && capitalizeName(me?.username)}
        </h3>

        {true && (
          <div className={styles.buttonWrapper} onClick={logout}>
            <h3 className={styles.margRight}>{translations.bttns.logout}</h3>
            <UIIcon size={25} source={"/svg/logout.svg"} />
          </div>
        )}

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
