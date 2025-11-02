"use client";

import { createContext, useContext } from "react";
import AddOpponentVM from "./addOpponent.vm";

export const AddOpponentContext = createContext<AddOpponentVM | null>(null);

export const useAddOpponentVm = () => {
  const vm = useContext(AddOpponentContext);
  if (!vm) throw new Error("Outside AddOpponentContext");
  else return vm;
};
