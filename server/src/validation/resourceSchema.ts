import { z } from 'zod';

export const ResourceInputSchema = z.object({
  title: z.string().min(1, 'Title is required'), // Ensures title is a non-empty string
  url: z.string().url('Invalid URL').optional(), // Ensures url is a valid URL if provided
  type: z.string().optional(), // Type is optional (e.g., 'video', 'article', etc.)
  status: z.enum(['not started', 'in progress', 'completed']).optional().default('not started'), // Enum for status with a default value
  learningPath: z.string().optional(), // Ensures learningPath is an optional string (ObjectId as a string)
  notes: z.array(z.string()).optional(), // Array of note IDs (ObjectIds as strings), optional
  createdAt: z.date().default(() => new Date()), // Defaults to the current date if not provided
});