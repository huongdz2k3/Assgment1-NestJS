import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FvGameController } from "./fvgame.controller";
import { fvGameSchema } from "./fvgame.model";
import { FvGameService } from "./fvgame.service";
import { gameSchema } from "src/Games/game.model";
import { UserSchema } from "src/Users/user.model";
@Module({
    imports: [MongooseModule.forFeature([{ name: 'FvGame', schema: fvGameSchema }]), MongooseModule.forFeature([{ name: "Game", schema: gameSchema }]), MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [FvGameController],
    providers: [FvGameService]
})

export class FvGameModule { }