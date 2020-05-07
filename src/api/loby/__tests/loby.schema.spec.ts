import game from "../../../core/services/game/game.service"
import { LobyResolvers } from "..";

describe("loby schema", () => {
    beforeEach(() => {
        game.generateState();
        game.createPlayer("test1");
        game.createPlayer("test2");
    });

    it("should get all players", () => {
        const result = LobyResolvers.Query.getPlayers();
        expect(result.size).toBe(2);
        expect(result.get("TEST1").getState().name).toBe("test1");
        expect(result.get("TEST2").getState().name).toBe("test2");
    });

    it("should update user status", () => {
        const result = LobyResolvers.Mutation.updatePlayerStatus(
            {},
            {
                input: {
                    token: "TEST2",
                    status: "APPROVED"
                }
            },
            {}
        );
        expect(result.player.status).toBe("APPROVED")
        expect(result.player.name).toBe("test2")
    });

    it("should update not exists user status", () => {
        const result = LobyResolvers.Mutation.updatePlayerStatus({},
            {
                input: {
                    token: "44329",
                    status: "APPROVED"
                }
            },
            {}
        );
        expect(result.errors[0]).toBe("Player Not Exists");
    });
});