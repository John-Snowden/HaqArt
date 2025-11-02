"use client";

import { createContext, useContext } from "react";
import OpponentsListVM from "./opponentsList.vm";

export const OpponentsListContext = createContext<OpponentsListVM | null>(null);

export const useOpponentsListVM = () => {
  const vm = useContext(OpponentsListContext);
  if (!vm) throw new Error("Outside OpponentsListContext");
  else return vm;
};
