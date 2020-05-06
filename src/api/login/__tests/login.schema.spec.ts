import game from "../../../core/services/game/game.service";
import { Player } from "../../../core/services/player/player.service"
import { LoginResolvers } from "..";

describe("login schema", () => {
    it("should call create player with the correct name", () => {
        game.createPlayer = jest.fn();
        LoginResolvers.Mutation.login(
            {},
            { input: { playerName: "test" } },
            {}
        );
        expect(game.createPlayer).toHaveBeenCalledWith("test");
    });

    it("should return 'already exists player' error", () => {
        game.createPlayer = jest.fn(() => false);
        const result = LoginResolvers.Mutation.login(
            {},
            { input: { playerName: "test" } },
            {}
        );
        expect(result.errors.length).toBe(1);
    });

    it("should return 'already exists player' error", () => {
        game.createPlayer = jest.fn(() => new Player("test", "test"));
        const result = LoginResolvers.Mutation.login(
            {},
            { input: { playerName: "test" } },
            {}
        );
        expect(result.token).toBe("test");
    });
});