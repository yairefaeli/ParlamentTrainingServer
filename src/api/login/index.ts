
import game from "../../core/services/game/game.service"
import { Player } from "../../core/services/player/player.service"

export const LoginResolvers = {
    Mutation: {
        login: (root, args, connectors) => {
            const player = game.createPlayer(args.input.playerName) as Player;
            game.timerCheck();
            if (!player) {
                return {
                    errors: ["user already exists"]
                };
            }
            return { token: player.getState().key };
        }
    }
}