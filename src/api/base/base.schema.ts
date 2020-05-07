import { gql } from "apollo-server";

export const baseTypeDefs = gql`
    scalar Date

    type Query {
        _blank: String
    }

    type Mutation {
        _blank:String
    }

    type Subscription {
        _blank: String
    }
`;