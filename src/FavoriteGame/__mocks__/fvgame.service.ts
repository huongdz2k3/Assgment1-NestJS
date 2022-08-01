import { fvGameStub } from "../test/fvGame.stub";

export const FvGameService = jest.fn().mockReturnValue({
    createFvList: jest.fn().mockResolvedValue(fvGameStub()),
    deleteOneGame: jest.fn().mockResolvedValue(fvGameStub()),
    deleteList: jest.fn().mockResolvedValue(fvGameStub())
})