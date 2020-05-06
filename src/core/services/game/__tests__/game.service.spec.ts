import game from "../game.service";
import { Player } from "../../player/player.service"

describe("game service spec", () => {
    beforeEach(() => {
        game.generateState();
    });
    describe("create player", () => {
        it("should create player", () => {
            const player = game.createPlayer("test") as Player;
            expect(player.getState().name).toBe("test");
            expect(player.getState().key).toBe("test"); // ################### ENCRYPT FOR "TEST"
        });

        it("should not create player for the second time", () => {
            game.createPlayer("test") as Player;
            const player = game.createPlayer("test");
            expect(player).toBeFalsy();
        });

        it("should not create if input undefined or empty", () => {
            const player = game.createPlayer(false) as Player;
            expect(player).toBeFalsy();
        });
    });
});