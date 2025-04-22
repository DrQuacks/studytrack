import { z } from 'zod';

export const StudySessionInputSchema = z.object({
  user: z.string().min(1, 'User ID is required'),
  learningPath: z.string().min(1, 'Learning Path ID is required'),
  durationMinutes: z.number().min(1, 'Duration must be at least 1 minute'),
  date: z.coerce.date().optional(),
});