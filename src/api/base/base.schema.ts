import { gql } from "apollo-server";

export const baseTypeDefs = gql`
    type Query {
        _blank: String
    }

    type Mutation {
        _blank:String
    }
`;