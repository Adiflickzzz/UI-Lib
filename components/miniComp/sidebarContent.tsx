"use client";

import Link from "next/link";

interface SidebarContentProps {
  data?: {
    header: string;
    listItems: string[];
  }[];
}

export const SidebarContent = ({ data = [] }: SidebarContentProps) => {
  return (
    <div className="space-y-10">
      {data.map((section, index) => (
        <div key={index} className="space-y-4">
          <div className="font-semibold">{section.header}</div>
          <div className="text-lg space-y-2">
            {section.listItems.map((item, itemIndex) => (
              <Link
                key={itemIndex}
                href={`/premium/components/${item}`}
                className="block"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
