import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";
import { ApiBadGatewayResponse, ApiBody, ApiCreatedResponse, ApiResponse } from "@nestjs/swagger";
import { User } from "./user.model";
import { UsersService } from "./user.service";
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }
    @Post()
    @ApiCreatedResponse({ description: "Create User" })
    @ApiBody({ type: User })
    createUser(
        @Body('username') username: string
    ): {} {
        const newUser = this.userService.createUser(username)
        return newUser
    }

    @Get()
    @ApiCreatedResponse({ description: "Get all user" })
    getAllUser() {
        return this.userService.getAllUser()
    }
    @Get(':id')
    @ApiCreatedResponse({ description: "Get one user" })
    @ApiBadGatewayResponse({ description: "Does not find user" })
    async getUser(@Param('id') userId: string) {
        const user = await this.userService.getUser(userId)
        return user
    }
}