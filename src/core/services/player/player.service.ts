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
}

export class Player {
    private _state: IPlayer;

    constructor(private name: string, private key: string) { 
        this._state = {
            name,
            key,
            status: PlayerStatus.PENDING,
            createdAt: new Date()
        };
    }

    getState() {
        return this._state;
    }

    setStatus(status: PlayerStatus){
        this._state.status = status;
    }
}