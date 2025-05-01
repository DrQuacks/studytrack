import LearningPath from '../models/LearningPath'; // Adjust the path if needed

const learningPathResolvers = {
  Query: {
    learningPaths: async () => {
      return await LearningPath.find();
    },
    // ... other queries
  },
};

export default learningPathResolvers;