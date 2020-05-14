import { gql } from "apollo-server";

export const LobyTypeDefs = gql`
    input UpdatePlayerStatusInput {
        token: String!
        status: PlayerStatus!
    }
    
    type UpdatePlayerStatusResponse {
        player: Player
        errors: [String]
    }

    extend type Query {
        getPlayers: [Player]
    }

    extend type Mutation {
        updatePlayerStatus(
            input: UpdatePlayerStatusInput
        ): UpdatePlayerStatusResponse
    }

    extend type Subscription {
        subscribeToTimer(playerToken: String!): String
    }
`;