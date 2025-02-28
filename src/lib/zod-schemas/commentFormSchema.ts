import { z } from "zod";

export const commentFormSchema = z.object({
  content: z.string().min(5),
  postId: z.string().transform((v => parseInt(v))).refine(v => !isNaN(v)),
});
