import { Prop, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
export class Game {
    @Prop()
    @ApiProperty({ type: String, description: 'name' })
    name: string

    @Prop({ default: Date.now() })
    createAt: Date
}

const gameSchema = SchemaFactory.createForClass(Game)
export { gameSchema }
export interface Game {
    id: string,
    name: string
}

// 