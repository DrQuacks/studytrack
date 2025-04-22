import { z } from 'zod';

export const NoteInputSchema = z.object({
  content: z.string().min(1, 'Content is required'), // Ensures content is a non-empty string
  resource: z.string().optional(), // Ensures resource is an optional string (ObjectId as a string)
  createdAt: z.date().default(() => new Date()), // Ensures createdAt is a valid date, defaults to the current date
});