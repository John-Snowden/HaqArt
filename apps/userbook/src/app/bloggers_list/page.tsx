"use client";

import { BloggersListScreen } from "@/screens";
import { BloggersListContext } from "@/context";

const BloggersList = () => {
  return (
    <BloggersListContext>
      <BloggersListScreen />
    </BloggersListContext>
  );
};

export default BloggersList;
