import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { fvGame } from "./fvgame.model";
import { Game } from "src/Games/game.model";
import { User } from "src/Users/user.model";
import { Model } from "mongoose";
import { NotFoundError } from "rxjs";


@Injectable()
export class FvGameService {
    constructor(
        @InjectModel('FvGame') private readonly FvGameModel: Model<fvGame>,
        @InjectModel('Game') private readonly gameModel: Model<Game>,
        @InjectModel('User') private readonly userModel: Model<User>
    ) { }

    async createFvList(userId: string, gameId: string) {
        const user = await this.userModel.findById(userId)
        if (!user) {
            return new Error("User does not exist");
        }
        const game = await this.gameModel.findById(gameId)
        if (!game) {
            return new Error("Game does not exist");
        }
        const gameLiked = await this.FvGameModel.findOne({ game: gameId, user: userId })
        if (gameLiked) {
            return new BadRequestException('You already add this game')
        }
        const FvGame = await this.FvGameModel.create({ game: gameId, user: userId })
        return FvGame
    }

    async deleteOneGame(userId: string, gameId: string) {
        const user = await this.userModel.findById(userId)
        if (!user) {
            return NotFoundError
        }
        const game = await this.gameModel.findById(gameId)
        if (!game) {
            return NotFoundError
        }
        const fvList = await this.FvGameModel.findOneAndDelete({ user: userId, game: gameId })
        return fvList
    }
    async deleteList(userId: string) {
        const games = await this.FvGameModel.deleteMany({ user: userId })
        return games

    }
}