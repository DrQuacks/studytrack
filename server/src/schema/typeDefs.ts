//temp
import { gql } from 'graphql-tag';

const typeDefs = gql`
  scalar DateTime

  type StudySession {
    id: ID!
    user: ID!
    learningPath: ID!
    durationMinutes: Int!
    date: DateTime!
  }

  type LearningPath {
    id: ID!
    title: String!
    description: String
    owner: ID!
    resources: [ID!]
    createdAt: DateTime!
  }

  type Query {
    studySessions: [StudySession!]!
  }

  type Query {
    learningPaths: [LearningPath!]!
  }

  input StudySessionInput {
    user: ID!
    learningPath: ID!
    durationMinutes: Int!
    date: DateTime
  }

  type Mutation {
    addStudySession(input: StudySessionInput!): StudySession!
  }
`;

export default typeDefs;