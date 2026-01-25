import { z } from "zod";

export const NewsletterSchema = z.object({
  email: z.email("Invalid email address"),
});

export type NewsletterSchemaType = z.infer<typeof NewsletterSchema>;
