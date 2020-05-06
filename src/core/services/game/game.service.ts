import { Player } from "../player/player.service"

export interface IGameState {
    players: Map<string, Player>;
}

class Game {
    private state: IGameState;
    constructor() {
        this.state = {
            players: new Map<string, Player>()
        };
    }

    getPlayer(key: string) {
        return this.state.players.get(key);
    }

    createPlayer(name) {
        if (typeof name != "string") { return false; }
        
        const key = name; // ###################################### ENCRYPT
        if (!this.state.players.has(key)) {
            const player = new Player(name, key);
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
}

const game = new Game();
export default game;