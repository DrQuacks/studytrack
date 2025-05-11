import { gql } from '@apollo/client';

export const ADD_STUDY_SESSION = gql`
  mutation AddStudySession($input: StudySessionInput!) {
    addStudySession(input: $input) {
      id
      date
      durationMinutes
      learningPath
      user
    }
  }
`;