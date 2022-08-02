import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./../Users/user.model"
@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
    // write userModel 

    async createUser(username: string) {
        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (format.test(username)) {
            throw new BadRequestException('Username must not have special characters')
        }
        if (username.length > 50) {
            throw new BadRequestException('Username must less than 50 characters')
        }
        if (username.length === 0) {
            throw new BadRequestException('Username must not be empty')
        }
        const currentUser = await this.userModel.findOne({ username: username })

        if (currentUser) {
            throw new BadRequestException('User exist')
        }
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
            throw new BadRequestException('User does not exist')
        }
        return user
    }

    async deleteUser(username: string) {
        return await this.userModel.findOneAndDelete({ username: username })
    }

}