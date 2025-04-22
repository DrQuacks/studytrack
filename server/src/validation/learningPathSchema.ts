import { z } from 'zod';

export const LearningPathInputSchema = z.object({
  title: z.string().min(1, 'Title is required'), // Ensures the title is a non-empty string
  description: z.string().optional(), // Description is optional
  owner: z.string().min(1, 'Owner ID is required'), // Ensures the owner is a valid non-empty string (ObjectId as a string)
  resources: z.array(z.string()).optional(), // Array of resource IDs (ObjectIds as strings), optional
  createdAt: z.date().default(() => new Date()), // Defaults to the current date if not provided
});