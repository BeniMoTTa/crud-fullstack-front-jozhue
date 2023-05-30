import * as z from "zod";

export const registerSchema = z.object({
  clientName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(3),
  phone: z.string(),
  gender: z.enum(["No say", "male", "female", "no binary"]),
  clientPhoto: z.string(),
  clientCity: z.string(),
});

export type RegisterData = z.infer<typeof registerSchema>;
