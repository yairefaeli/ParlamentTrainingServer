import { gql } from "apollo-server";

export const playerTypeDefs = gql`
    enum PlayerStatus {
        ACTIVE
        PENDING
        ERROR
        APPROVED
        DONE
        SUSPEND
        NOT_ACTIVE
        WINNER
    }

    type Player {
        name: String
        key: String
        status: PlayerStatus
        createdAt: String
    }

    extend type Subscription {
        playerStatusChanged(currentPlayerToken: String!): Player
    }

`;