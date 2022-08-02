import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { NotFoundError } from "rxjs";
import { Game } from "./game.model";
@Injectable()
export class GameService {
    constructor(@InjectModel('Game') private readonly gameModel: Model<Game>) { }
    //write model 
    async createGame(name: string) {
        const newGame = await this.gameModel.create({ name: name })
        return newGame
    }
    async getOneGame(id: string) {
        const game = await this.gameModel.findById(id)
        if (!game) {
            throw new BadRequestException('Game does not exist')
        }
        return game
    }
}