import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";
import { graphql } from "graphql";
import { resolvers, typeDefs } from "../src/api";

const defaultContext = {
    req: { isAuthenticated: () => true }
};

export function executeQuery(mockSchema,
    mockResolvers,
    query,
    context = defaultContext) {
    const executableSchema = makeExecutableSchema({
        typeDefs: [...typeDefs, mockSchema],
        resolvers: merge({}, resolvers, mockResolvers)
    });
    return graphql(executableSchema, query, undefined, context);
}
