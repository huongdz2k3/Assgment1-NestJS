import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { GamesController } from "./game.controller";
import { gameSchema } from "./game.model";
import { GameService } from "./game.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: "Game", schema: gameSchema }])],
    controllers: [GamesController],
    providers: [GameService]
})
export class GameModule { }