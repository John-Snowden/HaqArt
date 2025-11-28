"use client";

import { FC, ReactNode } from "react";
import { createCustomContext } from "./createCustomContext";
import BloggersListVM from "@/screens/bloggersList/bloggersList.vm";

interface Props {
  children: ReactNode;
}

const [Context, useBloggersListVM] = createCustomContext(BloggersListVM);

export const BloggersListContext: FC<Props> = ({ children }) => {
  return <Context>{children}</Context>;
};

export { useBloggersListVM };
