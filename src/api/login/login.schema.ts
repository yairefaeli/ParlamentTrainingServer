import { gql } from "apollo-server";


export const LoginTypeDef = gql`
    input PlayerLoginInput {
        playerName: String!
    }

    type PlayerToken {
        token: String
        errors: [String]
    }

    extend type Mutation {
        login(input: PlayerLoginInput!): PlayerToken
    }
`;
