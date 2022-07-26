import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse } from "@nestjs/swagger";
import { FvGame } from "./fvgame.model";
import { FvGameService } from "./fvgame.service";

@Controller('user/:userId/game')
export class FvGameController {
    constructor(private readonly FvGameServices: FvGameService) { }

    @Post(':gameId')
    @ApiCreatedResponse({ description: "Create Favorite Game" })
    @ApiBody({ type: FvGame })
    @ApiBadRequestResponse({ description: 'Game does not exist' })


    createFvList(@Param('userId') userId: string, @Param('gameId') gameId: string): {} {
        return this.FvGameServices.createFvList(userId, gameId)
    }

    @Delete(':gameId')
    @ApiCreatedResponse({ description: "Delete One Game" })

    deleteOneGame(@Param('userId') userId: string, @Param('gameId') gameId: string): {} {
        return this.FvGameServices.deleteOneGame(userId, gameId)
    }
    @Delete()
    @ApiCreatedResponse({ description: "Delete List of Games" })
    deleteList(@Param('userId') userId: string): {} {
        return this.FvGameServices.deleteList(userId)
    }
}