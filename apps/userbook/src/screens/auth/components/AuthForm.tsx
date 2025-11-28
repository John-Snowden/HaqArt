"use client";

import { observer } from "mobx-react-lite";

import { useAuthVM } from "@/context";
import { UIButton, UIInput, UISep } from "@/ui";

import styles from "../styles.module.css";

export const AuthForm = observer(() => {
  const { username, password, setUsername, setPassword, login } = useAuthVM();

  return (
    <div className={styles.main}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        className={styles.row}
      >
        <UIInput value={username} placeholder="Логин" onChange={setUsername} />
        <UISep isHorizontal />
        <UIInput
          type="password"
          value={password}
          placeholder="Пароль"
          onChange={setPassword}
        />
        <UISep isHorizontal />
        <UIButton title="Войти" iconSize={22} icon="/svg/lock.svg" />
      </form>
    </div>
  );
});
