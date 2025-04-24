import { GraphQLDateTime } from 'graphql-scalars';
import studySessionResolvers from './studySessionResolvers';
// import more resolvers here when needed

export const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    ...studySessionResolvers.Query,
  },
  Mutation: {
    ...studySessionResolvers.Mutation,
  },
};