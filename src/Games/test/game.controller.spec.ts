import { Test, TestingModule } from "@nestjs/testing"
import { GamesController } from "../game.controller"
import { GameService } from "../game.service"
import { gameStub } from "./game.stub"

jest.mock('./../game.service')
describe('GameController', () => {
    let gamesController: GamesController
    let gamesService: GameService
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [GamesController],
            providers: [GameService]
        }).compile()

        gamesController = module.get<GamesController>(GamesController)
        gamesService = module.get<GameService>(GameService)
        jest.clearAllMocks()
    })

    describe('getOneGame', () => {
        describe('When getOneGame is called ', () => {
            let game
            beforeEach(async () => {
                game = await gamesController.getOneGame(gameStub().id)
            })
            test('then it should call gameService', () => {
                expect(gamesService.getOneGame).toBeCalledWith(gameStub().id)
            })
            test('then it should return one game', () => {
                expect(game).toEqual(gameStub())
            })
        })
    })

    describe('createOneGame', () => {
        describe('When createOneGame is called', () => {
            let game
            let name: string
            beforeEach(async () => {
                game = await gamesController.createGame(name)
            })
            test('then it should call gameService', () => {
                expect(gamesService.createGame).toBeCalledWith(name)
            })
            test('then it should return one game', () => {
                expect(game).toEqual(gameStub())
            })
        })
    })
})