import { z } from 'zod';

export const CourseInputSchema = z.object({
  title: z.string().min(1, 'Course title is required'),
  description: z.string().optional(),
});