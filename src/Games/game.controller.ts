import { Controller } from "@nestjs/common";
import { Model } from "mongoose";
import { GameService } from "./game.service";



@Controller('game')
export class GamesController {

    constructor(private readonly gameService: GameService) { }
}