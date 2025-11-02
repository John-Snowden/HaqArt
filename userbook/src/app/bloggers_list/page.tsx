"use client";

import { useMemo } from "react";

import { BloggersListContext } from "@/screens/bloggersList/hooks";
import BloggersListVM from "@/screens/bloggersList/bloggersList.vm";
import { BloggersListScreen } from "@/screens/bloggersList/BloggersListScreen";

import { useRootStore } from "../RootClientContext";

export default function BloggersList() {
  const rootStore = useRootStore();
  const bloggersVM = useMemo(() => new BloggersListVM(rootStore), [rootStore]);

  return (
    <BloggersListContext.Provider value={bloggersVM}>
      <BloggersListScreen />
    </BloggersListContext.Provider>
  );
}
