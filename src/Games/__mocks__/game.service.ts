import { gameStub } from "../test/game.stub";

export const GameService = jest.fn().mockReturnValue({
    createGame: jest.fn().mockResolvedValue(gameStub()),
    getOneGame: jest.fn().mockResolvedValue(gameStub())
})