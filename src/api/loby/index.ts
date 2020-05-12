import game from "../../core/services/game/game.service";
import { crypt } from "../../core/utils/utils";
import { PlayerStatus } from "../../core/services/player/player.service";

export const LobyResolvers = {
    Query: {
        getPlayers: () => game.getPlayers()
    },
    Mutation: {
        updatePlayerStatus: (roots, args, connectors) => {
            const player = game.getPlayer(crypt(args.input.token));
            if (!player) {
                return { errors: ["Player Not Exists"] };
            }
            player.getState().status = args.input.status;
            return {
                player: {...game.getPlayer(crypt(args.input.token)).getState(), status: PlayerStatus.READY }
            };
        }
    }
};