import { z } from "zod";

export const onboardUserSchema = z.object({
  plot: z.number().min(0).max(10).optional(),
  acting: z.number().min(0).max(10),
  visuals: z.number().min(0).max(10),
  audio: z.number().min(0).max(10),
  pacing: z.number().min(0).max(10),
});
