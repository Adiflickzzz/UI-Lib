"use server";

import * as z from "zod";
import bcyrptjs from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validationFields = RegisterSchema.safeParse(values);

  if (!validationFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password } = validationFields.data;
  const hashedPassword = await bcyrptjs.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Email already exists!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send verification

  return { success: "Registered successfully!" };
};
