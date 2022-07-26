import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./../Users/user.model"
@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
    // write userModel 

    async createUser(username: string) {
        const newUser = new this.userModel({ username: username })
        const result = await newUser.save()
        return result
    }

    async getAllUser() {
        const allUser = await this.userModel.find().populate({
            path: 'FavoriteGame',
            populate: {
                path: 'Game'
            }
        })
        return allUser
    }
    async getUser(userId: string) {
        const user = await this.userModel.findById(userId).populate({
            path: 'FavoriteGame',
            populate: {
                path: 'Game'
            }
        })
        if (!user) {
            return new BadRequestException({ err: "User does not exist" })
        }
        return user
    }

}