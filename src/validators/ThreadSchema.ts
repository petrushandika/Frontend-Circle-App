import { z } from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const ThreadSchema = z.object({
  content: z.string().min(1).max(255),
  image: z
    .array(z.object({
      name: z.string(),
      size: z.number(),
      type: z.string(),
    }))
    .refine(files => files.length === 1, { message: "Image is required." })
    .refine(files => files[0].size <= MAX_FILE_SIZE, { message: "Max file size is 5MB" })
    .refine(files => ACCEPTED_IMAGE_TYPES.includes(files[0].type), { message: ".jpg, .jpeg, .png, and .webp files are accepted." }),
});
