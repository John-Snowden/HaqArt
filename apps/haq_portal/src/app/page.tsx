"use client";

import { HomeScreen } from "@/screens";

import stylesGlobal from "../stylesGlobal.module.css";

export default function Home() {
  return (
    <div className={stylesGlobal.window}>
      <HomeScreen />
    </div>
  );
}
