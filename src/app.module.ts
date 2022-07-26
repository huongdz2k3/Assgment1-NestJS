import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './Users/user.module';
import { GameModule } from './Games/game.module';
import { FvGameModule } from './FavoriteGame/fvgame.module';
@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://huongdz2003:Huongdzcogisai2003@nodeexpressprojects.ybqix.mongodb.net/ListFavoriteGame'), GameModule, FvGameModule],
  controllers: [AppController],
  providers: [AppService],
})
// connected database

export class AppModule { }
