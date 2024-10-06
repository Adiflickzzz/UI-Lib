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
import { MainNavButtons } from "./mainSection/mainNavButtons";
import LoopVideo from "./mainSection/video";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { nnfxDark as style } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "./ui/button";
interface MainSectionProps {
  header: string;
  description: string;
}

export const MainSection = ({ header, description }: MainSectionProps) => {
  const codeString = `
  "use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
`;

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
      <div className="w-3/4">
        <div className="mt-10">
          <Card className="backdrop-blur-lg">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Card Title</CardTitle>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(codeString);
                  }}
                  variant="outline"
                >
                  Copy
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <SyntaxHighlighter
                language="javascript"
                style={style}
                customStyle={{
                  background: "transparent",
                }}
                wrapLongLines={true}
              >
                {codeString}
              </SyntaxHighlighter>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
