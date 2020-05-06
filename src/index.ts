import * as dotenv from "dotenv";
import * as express from "express";
import { ApolloServer } from "apollo-server-express"
import { typeDefs, resolvers } from "./api"
import * as http from "http";
import { config } from "./config";

dotenv.config();

const app = express();

const apollo = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });

apollo.applyMiddleware({ app })

const server = http.createServer(app);

apollo.installSubscriptionHandlers(server);

server.listen({ port: config.port });