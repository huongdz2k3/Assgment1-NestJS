import { Test, TestingModule } from "@nestjs/testing"
import { FvGameController } from "../fvgame.controller"
import { FvGameService } from "../fvgame.service"
import { fvGameStub } from "./fvGame.stub"

jest.mock('.././fvgame.service')
describe('FvGameController', () => {
    let fvgameController: FvGameController
    let fvgameService: FvGameService
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FvGameController],
            providers: [FvGameService]
        }).compile()
        fvgameController = module.get<FvGameController>(FvGameController)
        fvgameService = module.get<FvGameService>(FvGameService)
        jest.clearAllMocks()
    })

    describe('createFvList', () => {
        describe('when createFvList is called', () => {
            let fvGame
            let userId: string, gameId: string
            beforeEach(async () => {
                fvGame = await fvgameController.createFvList(userId, gameId)
            })
            test('then it should call fvGameService', () => {
                expect(fvgameService.createFvList).toBeCalledWith(userId, gameId)
            })
            test('then it should return a Favorite List Games', () => {
                expect(fvGame).toEqual(fvGameStub())
            })
        })
    })

    describe('deleteOneGame', () => {
        describe('when deleteOneGame is called', () => {
            let fvGames
            let userId: string, gameId: string
            beforeEach(async () => {
                fvGames = await fvgameController.deleteOneGame(userId, gameId)

            })
            test('then it should call fvGameService', () => {
                expect(fvgameService.deleteOneGame).toBeCalledWith(userId, gameId)
                console.log(fvGames)
            })
            test('then it should return a List of Games', () => {
                expect(fvGames).toEqual(fvGameStub())
            })
        })
    })

    describe('deleteList', () => {
        let fvGames
        let userId: string
        beforeEach(async () => {
            fvGames = await fvgameController.deleteList(userId)

        })
        test('then it should call fvGameService', () => {
            expect(fvgameService.deleteList).toBeCalledWith(userId)
            console.log(fvGames)
        })
        test('then it should return a List of Games', () => {
            expect(fvGames).toEqual(fvGameStub())
        })
    })
})
