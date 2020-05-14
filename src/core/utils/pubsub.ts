import { PubSub } from "apollo-server";
import { PlayerStatus } from "../services/player/player.service";

export enum Actions {
    PLAYER_STATUS_CHANGED = "PLAYER_STATUS_CHANGED",
    ALL_PLAYERS_READY = "ALL_PLAYERS_READY"
}

export const pubsub = new PubSub();
