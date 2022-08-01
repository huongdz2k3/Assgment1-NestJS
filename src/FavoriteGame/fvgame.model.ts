import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger"
import { Document, ObjectId } from "mongoose"
export type FvGameDocument = FvGame & Document

@Schema({
    toJSON: {
        virtuals: true,
    },
})

export class FvGame {
    @Prop()
    id: string
    @Prop()
    @ApiProperty({ type: String, description: 'userId' })
    user: string

    @Prop()
    @ApiProperty({ type: String, description: 'gameId' })
    game: string
}

const fvGameSchema = SchemaFactory.createForClass(FvGame)

fvGameSchema.virtual('Game', {
    ref: 'Game',
    foreignField: '_id',
    localField: 'game'

})

export { fvGameSchema }

export interface fvGame {
    id: string,
    user: string,
    game: string
}