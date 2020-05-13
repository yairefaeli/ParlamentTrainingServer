import { baseTypeDefs } from "./base/base.schema";

import { merge } from "lodash";

import { keepAliveResolvers } from "./keep-alive";
import { keepAliveTypeDefs } from "./keep-alive/keep-alive.schema";
import { LoginTypeDef } from "./login/login.schema";
import { LoginResolvers } from "./login";
import { baseResolvers } from "./base";
import { LobyTypeDefs } from "./loby/loby.schema";
import { LobyResolvers } from "./loby";
import { playerTypeDefs } from "./player/player.schema";
import { playerResolvers } from "./player";


export const typeDefs = [
    baseTypeDefs,
    keepAliveTypeDefs,
    LoginTypeDef,
    LobyTypeDefs,
    playerTypeDefs
];

export const resolvers = merge(
    baseResolvers,
    keepAliveResolvers,
    LoginResolvers,
    LobyResolvers,
    playerResolvers
)