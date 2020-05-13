import { PubSub } from "apollo-server";
import { PlayerStatus } from "../services/player/player.service";

export enum Actions {
    PLAYER_STATUS_CHANGED = "PLAYER_STATUS_CHANGED"
}

export const pubsub = new PubSub();
