import { withFilter } from "apollo-server"
import { pubsub, Actions } from "../../core/utils/pubsub"

export const playerResolvers = {
    Subscription: {
        playerStatusChanged: {
            subscribe: withFilter(
                () => pubsub.asyncIterator([Actions.PLAYER_STATUS_CHANGED]),
                (payload, variables) => payload.key !== variables.currentPlayerToken
            ),
            resolve: payload => payload
        }
    }
}