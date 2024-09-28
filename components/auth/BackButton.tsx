import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <div className="items-center flex justify-center w-full">
      <Link href={href}>
        <Button variant="link" size="sm" className="text-gray-600">
          {label}
        </Button>
      </Link>
    </div>
  );
};
