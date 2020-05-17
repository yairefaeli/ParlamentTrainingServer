import { Player, PlayerStatus, IPlayer } from "../player/player.service"
import { crypt } from "../../utils/utils"
import { pubsub, Actions } from "../../utils/pubsub";

export interface IGameState {
    players: Map<string, Player>;
}

class Game {
    private state: IGameState;
    private timer: NodeJS.Timeout[];
    constructor() {
        this.state = {
            players: new Map<string, Player>()
        };
        this.timer = [];
    }

    getPlayer(key: string) {
        return this.state.players.get(key);
    }

    getPlayers() {
        return Array.from(this.state.players.values()).map(player => player.getState());
    }

    createPlayer(name) {
        if (typeof name != "string") { return false; }

        const key = crypt(name);
        if (!this.state.players.has(key)) {
            const player = new Player(name, key);
            player.setStatus(PlayerStatus.PENDING);

            this.state.players.set(key, player);
            return player;
        }
        return false;
    }

    generateState() {
        this.state = {
            players: new Map<string, Player>()
        };
    }

    isAllReady() {
        let flag = true;
        this.state.players.forEach(player => {
            if (player.getState().status != PlayerStatus.READY) {
                flag = false;
            }
        })
        return flag;
    }

    timerCheck() {
        if (this.isAllReady()) {
            for (let i = 1; i <= 5; i++) {
                this.timer.push(setTimeout(() => {
                    pubsub.publish(Actions.ALL_PLAYERS_READY, i)
                }, i * 1000));
            }

        } else {
            this.timer.forEach(timer => clearTimeout(timer))
            pubsub.publish(Actions.ALL_PLAYERS_READY, "0")
        }
    }

}

const game = new Game();
export default game;