import game from "../../core/services/game/game.service";
import { crypt } from "../../core/utils/utils";
import { withFilter } from "apollo-server";
import { pubsub, Actions } from "../../core/utils/pubsub";

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
            player.setStatus(args.input.status)
            game.timerCheck();
            return {
                player: player.getState()
            };
        }
    },
    Subscription: {
        subscribeToTimer: {
            subscribe:
                () => pubsub.asyncIterator([Actions.ALL_PLAYERS_READY]),
            resolve: payload => payload
        }
    }
};