import { baseTypeDefs } from "./base/base.schema";

import { merge } from "lodash";

import { keepAliveResolvers } from "./keep-alive";
import { keepAliveTypeDefs } from "./keep-alive/keep-alive.schema";


export const typeDefs = [baseTypeDefs, keepAliveTypeDefs];

export const resolvers = merge(keepAliveResolvers)