import * as mongoose from 'mongoose'
export const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

export interface User {
    id: string,
    username: string
}