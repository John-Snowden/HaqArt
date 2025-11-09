"use client";

import { HomeScreen } from "@/screens";

import { HomeContext } from "@/context/HomeContext";

import stylesGlobal from "../stylesGlobal.module.css";

export default function Home() {
  return (
    <HomeContext>
      <div className={stylesGlobal.window}>
        <HomeScreen />
      </div>
    </HomeContext>
  );
}
