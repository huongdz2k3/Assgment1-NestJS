import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document, ObjectId } from "mongoose"
export type UserDocument = User & Document


@Schema({
    toJSON: {
        virtuals: true,
    },
})

export class User {
    @Prop()
    @ApiProperty({ type: String, description: 'username' })
    username: string

}

const UserSchema = SchemaFactory.createForClass(User)
UserSchema.virtual('FavoriteGame', {
    ref: 'FvGame',
    foreignField: 'user',
    localField: '_id'
})
export { UserSchema }
export interface User {
    id: string,
    username: string
}