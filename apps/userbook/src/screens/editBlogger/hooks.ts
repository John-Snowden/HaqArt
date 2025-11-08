"use client";

import { createContext, useContext } from "react";
import EditBloggerVM from "./editBlogger.vm";

export const EditBloggerContext = createContext<EditBloggerVM | null>(null);

export const useEditBloggerVM = () => {
  const vm = useContext(EditBloggerContext);
  if (!vm) throw new Error("Outside EditBloggerContext");
  else return vm;
};
