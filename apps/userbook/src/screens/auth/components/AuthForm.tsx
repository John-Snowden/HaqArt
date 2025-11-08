"use client";

import Image from "next/image";
import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useAuthVM } from "@/app/auth/page";

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
        <UIInput
          type="text"
          value={username}
          placeholder="Логин"
          style={styles.margLeft}
          onChange={setUsername}
        />
        <UIInput
          type="password"
          value={password}
          placeholder="Пароль"
          style={styles.margLeft}
          onChange={setPassword}
        />
        <button
          className={styles.bttn}
          style={{ marginBottom: 8 }}
          role="button"
          type="submit"
        >
          <div>
            <Image
              src="/svg/lock.svg"
              alt="icon"
              color="white"
              width={22}
              height={22}
              priority={false}
            />
          </div>
          <h2 className={styles.bttnTitle}>Войти</h2>
        </button>
      </form>
    </div>
  );
});
