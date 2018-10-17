import {makeExecutableSchema, GraphQLUpload} from "apollo-server-express";
import {typeDefs as Turnover, queries as turnoverQueries, mutations as turnoverMutations} from "./turnover/turnover";
import {typeDefs as File, mutations as uploadMutations} from "./utils/upload/file";

const typeDefs = `
  type Query
 
  type Mutation
`;

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    ...turnoverQueries
  },
  Mutation: {
    ...turnoverMutations,
    ...uploadMutations
  }
};

export const schema = makeExecutableSchema({
  typeDefs: [ typeDefs, Turnover, File ],
  resolvers
});
