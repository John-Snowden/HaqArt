"use client";

import { Toaster } from "sonner";

export const UIToast = () => {
  return (
    <div style={{ display: "block" }}>
      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          style: {
            display: "flex",
            height: "50px",
            width: "fit-content",
            backgroundColor: "rgb(232, 232, 232)",
            borderColor: "white",
            padding: "4px 30px",
            borderRadius: "4px",
            fontWeight: "bold",
            fontSize: "14px",
          },
        }}
      />
    </div>
  );
};
