"use client";

import { observer } from "mobx-react-lite";

import { UIInput } from "@/ui";
import { useEditUserVM } from "@/app/edit_user/page";
import { userFieldLabels } from "@/constants/writableInputFields";

import styles from "../styles.module.css";
import { OpponentSection } from "./OpponentSection";

export const ProblemInputs = observer(() => {
  const editUserVM = useEditUserVM();
  const { problemFull, problemShort, setProblemFull, setProblemShort } =
    editUserVM;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "75vw",
          marginTop: "14px",
          marginBottom: "12px",
        }}
      >
        <textarea
          rows={8}
          placeholder={userFieldLabels.problemFull}
          value={problemFull}
          onChange={(e) => setProblemFull(e.target.value)}
          className={styles.fullProblemWrapper}
        />
      </div>

      <div className={styles.inputGroup}>
        <div style={{ width: "35vw" }}>
          <UIInput
            key={userFieldLabels.problemShort}
            type="text"
            label={userFieldLabels.problemShort}
            value={problemShort || ""}
            style={styles.input}
            placeholder={"..."}
            onChange={setProblemShort}
          />
        </div>
        <OpponentSection />
      </div>
    </>
  );
});
