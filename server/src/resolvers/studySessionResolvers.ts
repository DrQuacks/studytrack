import StudySession from '../models/StudySession';
import { StudySessionInputSchema } from '../validation/studySessionSchema';

const studySessionResolvers = {
  Query: {
    studySessions: async () => {
      return await StudySession.find();
    },
  },
  Mutation: {
    addStudySession: async (_: any, args: { input: any }) => {
      const parseResult = StudySessionInputSchema.safeParse(args.input);

      if (!parseResult.success) {
        const errorMessages = parseResult.error.issues.map(i => i.message).join(', ');
        throw new Error(`Validation failed: ${errorMessages}`);
      }

      const { user, learningPath, durationMinutes, date } = parseResult.data;

      const session = new StudySession({
        user,
        learningPath,
        durationMinutes,
        date: date || new Date(),
      });

      await session.save();
      return session;
    },
  },
};

export default studySessionResolvers;