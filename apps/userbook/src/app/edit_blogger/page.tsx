"use client";

import { EditBloggerScreen } from "@/screens";
import { EditBloggerContext } from "@/context";

const EditBlogger = () => {
  return (
    <EditBloggerContext>
      <EditBloggerScreen />
    </EditBloggerContext>
  );
};

export default EditBlogger;
