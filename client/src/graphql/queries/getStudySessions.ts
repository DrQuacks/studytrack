import { gql } from '@apollo/client';

export const GET_STUDY_SESSIONS = gql`
  query GetStudySessions {
    studySessions {
      id
      durationMinutes
      date
      learningPath
      user
    }
  }
`;