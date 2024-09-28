"use client";
import React, { useState, useTransition } from "react";
import { CardWrapper } from "./CardWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormSuccess } from "./FormSuccess";
import { FormError } from "./FormError";
import { register } from "@/actions/register";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Register"
      description="To access premium components"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form className="space-y-4 w-72" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <h1>Name</h1>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="John Doe"
                      className={`${
                        isPending &&
                        "animate-pulse duration-700 cursor-not-allowed"
                      }`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <h1>Email</h1>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="johndoe123@example.com"
                      type="email"
                      className={`${
                        isPending &&
                        "animate-pulse duration-700 cursor-not-allowed"
                      }`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <h1>Password</h1>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="******"
                      type="password"
                      className={`${
                        isPending &&
                        "animate-pulse duration-700 cursor-not-allowed"
                      }`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="py-1">
            <FormError message={error} />
            <FormSuccess message={success} />
          </div>
          <Button
            className={`${
              isPending && "animate-pulse duration-700 cursor-wait"
            } w-full font-bold text-sm`}
          >
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
