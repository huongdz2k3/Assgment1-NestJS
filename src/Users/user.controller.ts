import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";
import { UsersService } from "./user.service";
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }
    @Post()
    createUser(
        @Body('username') username: string
    ): {} {
        const newUser = this.userService.createUser(username)
        return newUser
    }

    @Get()
    getAllUser() {
        return this.userService.getAllUser()
    }
    @Get(':id')
    getUser(@Param('id') userId: string) {
        return this.userService.getUser(userId)
    }
}