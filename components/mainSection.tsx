"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MainNavButtons } from "./miniComp/mainNavButtons";
import LoopVideo from "./miniComp/video";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { LuClipboardList } from "react-icons/lu";
import CodeBlock from "./miniComp/codeBlock";
interface MainSectionProps {
  header: string;
  description: string;
}

export const MainSection = ({ header, description }: MainSectionProps) => {
  const [copy, setCopy] = useState(false);
  return (
    <div className="">
      <div className="h-full">
        <div className="text-4xl font-semibold tracking-tight">{header}</div>
        <div className="mt-3 text-white/50">{description}</div>
        <div className="mt-8">
          <MainNavButtons demoLink="/" sourceCodeLink="/" />
        </div>
        <div className="mt-8">
          <LoopVideo
            src="https://videos.ctfassets.net/jzzgtonmw9s6/DFEEjoZyOZrXWgBdPJgpr/b7d44e0badbba4898a6ee495a056f5fe/Untitled.mov"
            className="rounded-2xl w-[1080px]"
          />
        </div>
      </div>
      <CodeBlock />
    </div>
  );
};
