import { PubSub } from "apollo-server";

export enum Actions {
    PLAYER_STATUS_CHANGED = "PLAYER_STATUS_CHANGED"
}

export const pubsub = new PubSub();

export const playerResolverDemo = {
    Subscription: {
        playerStatusChanged: {
            subscribe: () => pubsub.asyncIterator([Actions.PLAYER_STATUS_CHANGED]),
            resolve: payload => payload
        }
    }
};

// set status( status: PlayerStatus ){
//     this.StaticRange.status = status;
//     pubsub.publish(Actions.PLAYER_STATUS_CHANGED, this.state)
// }