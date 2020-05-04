import { gql } from "apollo-server";

export const keepAliveTypeDefs = gql`
    enum KeepAliveStatus {
        ACTIVE
        PENDING
        ERROR
        DONE
        SUSPEND
    }

    type keepAlive {
        timestamp: Float
        status: KeepAliveStatus
        token: String
    }

    extend type Query {
        keepAlive(token: String): keepAlive
    }
`;