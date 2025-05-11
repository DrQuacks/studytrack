import { gql } from '@apollo/client';

export const GET_LEARNING_PATHS = gql`
  query GetLearningPaths {
    learningPaths {
      id
      title
    }
  }
`;