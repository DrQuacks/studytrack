import studySessionResolvers from './studySessionResolvers';
// import more resolvers here when needed

export const resolvers = {
  Query: {
    ...studySessionResolvers.Query,
  },
  Mutation: {
    ...studySessionResolvers.Mutation,
  },
};