import { pubsub, Actions } from "../../utils/pubsub";

export interface IPlayer {
    name: string;
    key: string;
    status: PlayerStatus;
    createdAt: Date;
}

export enum PlayerStatus {
    ACTIVE = "ACTIVE",
    PENDING = "PENDING",
    ERROR = "ERROR",
    APPROVED = "APPROVED",
    DONE = "DONE",
    SUSPEND = "SUSPEND",
    NOT_ACTIVE = "NOT_ACTIVE",
    WINNER = "WINNER",
    READY = "READY"
}

export class Player {
    private _state: IPlayer;

    constructor(private name: string, private key: string) { 
        this._state = {
            name,
            key,
            status: undefined,
            createdAt: new Date()
        };
    }

    getState() {
        return this._state;
    }

    setStatus(status: PlayerStatus){
        this._state.status = status;
        pubsub.publish(Actions.PLAYER_STATUS_CHANGED, this._state)
    }
}