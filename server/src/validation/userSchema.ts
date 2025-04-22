import { z } from 'zod';

export const UserInputSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
  date: z.date().default(() => new Date()), // Ensures the input is a valid Date object
});