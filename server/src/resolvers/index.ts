import { GraphQLDateTime } from 'graphql-scalars';
import studySessionResolvers from './studySessionResolvers';
import learningPathResolvers from './learningPathResolvers'
// import more resolvers here when needed

export const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    ...studySessionResolvers.Query,
    ...learningPathResolvers.Query
  },
  Mutation: {
    ...studySessionResolvers.Mutation,
  },
};