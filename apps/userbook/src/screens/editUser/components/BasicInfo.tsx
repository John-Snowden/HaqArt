"use client";

import Link from "next/link";
import Image from "next/image";
import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useEditUserVM } from "@/app/edit_user/page";
import { userFieldLabels } from "@/constants/writableInputFields";

import styles from "../styles.module.css";

export const BasicInfo = observer(() => {
  const { username, userLink, setUsername, setUserLink } = useEditUserVM();

  return (
    <div className={styles.inputGroup}>
      <div style={{ width: "35vw" }}>
        <UIInput
          type="text"
          label={userFieldLabels.username}
          value={username}
          style={styles.input}
          placeholder={"..."}
          onChange={setUsername}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "40vw",
        }}
      >
        <div style={{ flex: 1 }}>
          <UIInput
            type="text"
            label={userFieldLabels.userLink}
            value={userLink || ""}
            style={styles.input}
            placeholder={"https://..."}
            onChange={setUserLink}
          />
        </div>
        {userLink && (
          <Link
            href={userLink}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            className={styles.bttn}
          >
            <Image
              src={"/svg/link.svg"}
              alt="icon"
              width={16}
              height={16}
              priority={false}
            />
          </Link>
        )}
      </div>
    </div>
  );
});
