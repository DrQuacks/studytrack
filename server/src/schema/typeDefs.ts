//temp
import { gql } from 'graphql-tag';

const typeDefs = gql`
  type StudySession {
    id: ID!
    user: ID!
    learningPath: ID!
    durationMinutes: Int!
    date: String!
  }

  type Query {
    studySessions: [StudySession!]!
  }

  input StudySessionInput {
    user: ID!
    learningPath: ID!
    durationMinutes: Int!
    date: String
  }

  type Mutation {
    addStudySession(input: StudySessionInput!): StudySession!
  }
`;

export default typeDefs;