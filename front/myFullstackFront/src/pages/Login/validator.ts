import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Must be a valid email."),
  password: z.string().nonempty("This field is required."),
});

export type LoginData = z.infer<typeof schema>;
