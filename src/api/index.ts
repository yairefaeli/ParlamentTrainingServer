import { baseTypeDefs } from "./base/base.schema";

import { merge } from "lodash";

import { keepAliveResolvers } from "./keep-alive";
import { keepAliveTypeDefs } from "./keep-alive/keep-alive.schema";
import { LoginTypeDef } from "./login/login.schema";
import { LoginResolvers } from "./login";


export const typeDefs = [baseTypeDefs, keepAliveTypeDefs, LoginTypeDef];

export const resolvers = merge(keepAliveResolvers, LoginResolvers)