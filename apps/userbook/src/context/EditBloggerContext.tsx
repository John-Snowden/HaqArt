"use client";

import { FC, ReactNode } from "react";
import { createCustomContext } from "./createCustomContext";
import EditBloggerVM from "@/screens/editBlogger/editBlogger.vm";

interface Props {
  children: ReactNode;
}

const [Context, useEditBloggerVM] = createCustomContext(EditBloggerVM);

export const EditBloggerContext: FC<Props> = ({ children }) => {
  return <Context>{children}</Context>;
};

export { useEditBloggerVM };
