import React from "react";
import { Button } from "../ui/button";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

interface MainNavButtonsProps {
  demoLink: string;
  sourceCodeLink: string;
}

export const MainNavButtons = ({
  demoLink,
  sourceCodeLink,
}: MainNavButtonsProps) => {
  return (
    <div className="flex gap-3">
      <Link href={demoLink}>
        <Button className="gap-2 items-center" variant="outline">
          Live Demo <MdArrowOutward className="size-4" />
        </Button>
      </Link>
      <Link href={sourceCodeLink}>
        <Button className="gap-2 items-center" variant="outline">
          Source Code <MdArrowOutward className="size-4" />
        </Button>
      </Link>
    </div>
  );
};
