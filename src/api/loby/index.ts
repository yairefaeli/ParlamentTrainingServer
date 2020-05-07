import game from "../../core/services/game/game.service";

export const LobyResolvers = {
    Query: {
        getPlayers: () => game.getPlayers()
    },
    Mutation: {
        updatePlayerStatus: (roots, args, connectors) => {
            const player = game.getPlayer(args.input.token);
            if (!player) {
                return { errors: ["Player Not Exists"] };
            }
            player.getState().status = args.input.status;
            return {
                player: game.getPlayer(args.input.token).getState()
            };
        }
    }
};