import { z } from "zod";

export const RegisterSchema = z.object({
  fullName: z.string().nonempty({
    message: "Full Name is required!",
  }),
  username: z.string().nonempty({
    message: "Username is required!",
  }),
  email: z.string().email({
    message: "Invalid email address!",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export type RegisterProps = z.infer<typeof RegisterSchema>;
