import { Player, PlayerStatus, IPlayer } from "../player/player.service"
import { crypt } from "../../utils/utils"
import { pubsub, Actions } from "../../utils/pubsub";

export interface IGameState {
    players: Map<string, Player>;
}

class Game {
    private state: IGameState;
    private timers: NodeJS.Timeout[];
    constructor() {
        this.state = {
            players: new Map<string, Player>()
        };
        this.timers = [];
    }

    getPlayer(key: string) {
        return this.state.players.get(key);
    }

    getPlayers() {
        let players: IPlayer[] = []
        this.state.players.forEach(player => players.push(player.getState()));
        return players;
    }

    createPlayer(name) {
        if (typeof name != "string") { return false; }

        this.timers.forEach(timer => clearTimeout(timer))
        pubsub.publish(Actions.ALL_PLAYERS_READY, "0")

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
        var flag = true;
        this.state.players.forEach(player => {
            if (player.getState().status != PlayerStatus.READY) {
                flag = false;
            }
        })
        if (flag) {
            const numbers = [
                { id: "1", sec: 1000 },
                { id: "2", sec: 2000 },
                { id: "3", sec: 3000 },
                { id: "4", sec: 4000 },
                { id: "5", sec: 5000 },
                { id: "6", sec: 6000 },
                { id: "7", sec: 7000 },
                { id: "8", sec: 8000 },
                { id: "9", sec: 9000 },
                { id: "10", sec: 10000 },
                { id: "11", sec: 11000 },
                { id: "12", sec: 12000 },
            ];

            numbers.forEach(element => {
                this.timers.push(setTimeout(() => {
                    pubsub.publish(
                        Actions.ALL_PLAYERS_READY,
                        element.id
                    )
                }, element.sec))
            });
        }
    }
}

const game = new Game();
export default game;