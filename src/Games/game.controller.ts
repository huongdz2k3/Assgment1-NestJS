import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiBody, ApiBadGatewayResponse, ApiCreatedResponse, ApiOkResponse } from "@nestjs/swagger";
import { Model } from "mongoose";
import { Game } from "./game.model";
import { GameService } from "./game.service";



@Controller('game')
export class GamesController {

    constructor(private readonly gameService: GameService) { }
    @Post()
    @ApiCreatedResponse({ description: 'Create game' })
    @ApiBody({ type: Game })
    createGame(@Body('name') name: string): {} {
        const game = this.gameService.createGame(name)
        return game
    }
    @Get(':id')
    @ApiCreatedResponse({ description: "Get one game" })
    @ApiBadGatewayResponse({ description: "Does not find game" })

    getOneGame(@Param('id') id: string): {} {
        const game = this.gameService.getOneGame(id)
        return game
    }
}