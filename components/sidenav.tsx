import React from "react";
import { SidebarContent } from "./sidebarContent";

export const Sidenav = () => {
  return (
    <div className="container py-24 px-12 space-y-10 text-xl">
      <SidebarContent header="Getting started" />
      <SidebarContent header="Components" />
    </div>
  );
};
