"use client";

import { useMemo } from "react";

import { EditBloggerContext } from "@/screens/editBlogger/hooks";
import EditBloggerVM from "@/screens/editBlogger/editBlogger.vm";
import { EditBloggerScreen } from "@/screens/editBlogger/EditBloggerScreen";

import { useRootStore } from "../RootClientContext";

export default function EditBlogger() {
  const rootStore = useRootStore();
  const editBloggerVM = useMemo(
    () => new EditBloggerVM(rootStore),
    [rootStore],
  );

  return (
    <EditBloggerContext.Provider value={editBloggerVM}>
      <EditBloggerScreen />
    </EditBloggerContext.Provider>
  );
}
