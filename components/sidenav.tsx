import React from "react";
import { SidebarContent } from "./sidebarContent";

const data = [
  {
    header: "Getting started",
    listItems: ["Introduction", "Installation", "Examples", "Gallary"],
  },
  {
    header: "Components",
    listItems: [
      "Accordion",
      "Alert",
      "Alert Dialog",
      "Aspect Ratio",
      "Avatar",
      "Badge",
      "Breadcrumb",
      "Button",
      "Calendar",
      "Card",
      "Carousel",
    ],
  },
];

export const Sidenav = () => {
  return (
    <div className="container py-24 px-12 space-y-10 text-xl">
      <SidebarContent data={data} />
    </div>
  );
};
