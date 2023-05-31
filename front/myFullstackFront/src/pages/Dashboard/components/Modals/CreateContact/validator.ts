import { z } from "zod";

export const contactSchema = z.object({
  contactName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  gender: z.enum(["uniformed", "male", "female", "no binary"]),
  contactCity: z.string(),
});
export type contactData = z.infer<typeof contactSchema>;
