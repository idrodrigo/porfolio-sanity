"use client";

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

function AdminPage() {
  return <NextStudio config={config} />;
}

export default AdminPage;
