import * as mongoose from 'mongoose'
export const gameSchema = new mongoose.Schema({
    name: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

export interface Game {
    id: string,
    name: string
}