"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";

import RootStore from "@/stores/rootStore";
import { ROUTES } from "@/constants/routes";

const RootContext = createContext<RootStore | null>(null);
export const useRootStore = () => {
  const rootStore = useContext(RootContext);
  if (!rootStore) throw new Error("Root store exists on client side only");
  else return rootStore;
};

interface IProps {
  children: ReactNode;
}

export const RootClientContext: FC<IProps> = ({ children }) => {
  const router = useRouter();
  const rootStore = useMemo(() => new RootStore(router), [router]);

  const currentRoute = usePathname();

  useEffect(() => {
    rootStore.initApp();
  }, [rootStore]);

  useEffect(() => {
    if (currentRoute === ROUTES.ROOT) return;
    else rootStore.routerStore.persistCurrentRoute(currentRoute as ROUTES);
  }, [rootStore.routerStore, currentRoute]);

  return <RootContext value={rootStore}>{children}</RootContext>;
};
