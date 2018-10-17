import {ApolloServer} from "apollo-server-express";
import * as express from 'express';
import {schema} from "./schema";

const server = new ApolloServer({
  schema,
  uploads: true
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);