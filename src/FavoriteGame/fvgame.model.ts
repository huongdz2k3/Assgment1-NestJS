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
    @ApiProperty({ type: String, description: 'userId' })
    user: string

    @Prop()
    @ApiProperty({ type: String, description: 'gameId' })
    game: string

    @Prop({ default: Date.now() })
    createAt: Date
}

const fvGameSchema = SchemaFactory.createForClass(FvGame)

fvGameSchema.virtual('Game', {
    ref: 'Game',
    foreignField: '_id',
    localField: 'game'

})

export { fvGameSchema }







// export const fvGameSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.SchemaTypes.ObjectId,
//         ref: 'User'
//     },
//     game: {
//         type: mongoose.SchemaTypes.ObjectId,
//         ref: 'Game'
//     },
//     createAt: {
//         type: Date,
//         default: Date.now()
//     }
// }, {
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true }
// }
// )

// fvGameSchema.virtual('Game', {
//     ref: 'Game',
//     foreignField: "_id",
//     localField: 'game'
// })


export interface fvGame {
    id: string,
    user: string,
    game: string
}