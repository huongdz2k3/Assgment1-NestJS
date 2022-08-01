import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'

@Schema()
export class Game {
    @Prop()
    name: string
    @Prop()
    id: string
}

const gameSchema = SchemaFactory.createForClass(Game)
export { gameSchema }
