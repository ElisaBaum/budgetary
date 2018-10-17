import "reflect-metadata";

import * as express from 'express';
import {buildSchema} from "type-graphql";
import {ApolloServer} from "apollo-server-express";

import {TurnoverResolver} from "./turnover/TurnoverResolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      TurnoverResolver
    ],
    validate: false
  });

  const app = express();

  const server = new ApolloServer({
    schema,
    uploads: true,
    formatError: (error: any) => {
      console.warn(error);
      return error;
    },

  });
  server.applyMiddleware({ app });

  app.listen(4000);
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

}

bootstrap();
