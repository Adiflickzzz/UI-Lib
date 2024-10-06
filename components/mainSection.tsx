import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CodeSection from "./mainSection/codeSection";

interface MainSectionProps {
  header: string;
  description: string;
}

export const MainSection = ({ header, description }: MainSectionProps) => {
  return (
    <div className="h-full space-y-10">
      <div>
        {/* intro section */}
        <div className="text-4xl font-semibold tracking-tight">{header}</div>
        <div className="mt-3 text-white/50">{description}</div>
      </div>
      <div>
        {/* code section */}
        <CodeSection />
      </div>
    </div>
  );
};
