import { Player, PlayerStatus } from "../player.service"
import { pubsub, Actions } from "../../../utils/pubsub";

describe("player service", () => {
    let player: Player;

    beforeEach(() => {
        player = new Player("test", "test-key");
    });

    it("should create player", () => {
        expect(player.getState().name).toBe("test");
        expect(player.getState().key).toBe("test-key");
        expect(player.getState().status).toBe(undefined);
        expect(player.getState().createdAt).toBeDefined;
    });

    it("should set player status and publish event", () => {
        pubsub.publish = jest.fn();
        player.setStatus(PlayerStatus.PENDING);

        expect(player.getState().status).toBe(PlayerStatus.PENDING);
        expect(pubsub.publish["mock"].calls.length).toBe(1);
        expect(pubsub.publish["mock"].calls[0][0]).toBe(Actions.PLAYER_STATUS_CHANGED);
    })
})