import { PubSub } from "apollo-server";
import { PlayerStatus } from "../services/player/player.service";

export enum Actions {
    PLAYER_STATUS_CHANGED = "PLAYER_STATUS_CHANGED"
}

export const pubsub = new PubSub();

// export const playerResolverDemo = {
//     Subscription: {
//         playerStatusChanged: {
//             subscribe: () => pubsub.asyncIterator([Actions.PLAYER_STATUS_CHANGED]),
//             resolve: payload => payload
//         }
//     }

    
// };
