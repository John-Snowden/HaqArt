"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";

import RootStore from "@/store/rootStore";

const Context = createContext<RootStore | null>(null);
export const useRootStore = () => {
  const rootStore = useContext(Context);
  if (!rootStore) throw new Error("Outside RootContext");
  else return rootStore;
};

interface Props {
  children: ReactNode;
}

export const RootContext: FC<Props> = ({ children }) => {
  const router = useRouter();
  const rootStore = useMemo(() => new RootStore(router), [router]);

  useEffect(() => {
    rootStore.init();
  }, [rootStore]);

  return <Context value={rootStore}>{children}</Context>;
};
