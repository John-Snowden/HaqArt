"use client";

import { FC, ReactNode } from "react";

import stylesGlobal from "../../stylesGlobal.module.css";

interface IProps {
  children: ReactNode;
}

export const Screen: FC<IProps> = ({ children }) => {
  return <div className={stylesGlobal.screen}>{children}</div>;
};
