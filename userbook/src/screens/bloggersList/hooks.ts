"use client";

import { createContext, useContext } from "react";
import BloggersListVM from "./bloggersList.vm";

export const BloggersListContext = createContext<BloggersListVM | null>(null);

export const useBloggersListVM = () => {
  const vm = useContext(BloggersListContext);
  if (!vm) throw new Error("Outside BloggersListContext");
  else return vm;
};
