"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./BackButton";
import { Header } from "./Header";
import { Social } from "./Social";
import { Button } from "../ui/button";
import Link from "next/link";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  description: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  description,
}: CardWrapperProps) => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="border-r-2 my-14 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" height={100} width={100} alt="logo" />
      </div>
      <div className="h-full lg:flex flex-col items-center justify-center">
        <div className="text-center space-y-2">
          <h1 className="text-3xl">{headerLabel}</h1>
          <p className="text-base text-white/80">{description}</p>
        </div>
        <div className="flex items-center justify-center mt-8 w-full">
          {children}
        </div>
        <div className="mt-4">
          <Link href={backButtonHref}>
            <Button variant="link" size="sm">
              {backButtonLabel}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
