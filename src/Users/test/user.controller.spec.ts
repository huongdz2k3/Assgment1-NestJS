import { Test, TestingModule } from "@nestjs/testing"
import { UsersController } from "../user.controller"
import { User } from "../user.model"
import { UsersService } from "../user.service"
import { userStub } from "./stubs/user.stub"

jest.mock('.././user.service')
describe('UserController', () => {
    let usersController: UsersController
    let usersService: UsersService
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService]
        }).compile()

        usersController = module.get<UsersController>(UsersController)
        usersService = module.get<UsersService>(UsersService)
        jest.clearAllMocks()
    })

    describe('getUser', () => {
        describe('when getUser is called', () => {
            let user
            beforeEach(async () => {
                user = await usersController.getUser(userStub().id)
            })
            test('then it should call userService', () => {
                expect(usersService.getUser).toBeCalledWith(userStub().id)
            })
            test('then it should return a user', () => {

                expect(user).toEqual(userStub())
            })
        })
    })

    describe('getAllUsers', () => {
        describe('when getAllUsers is called', () => {
            let users
            beforeEach(async () => {
                users = await usersController.getAllUser()
            })
            test('then it should call userService', () => {
                expect(usersService.getAllUser).toHaveBeenCalled()
            })
            test('then is should return users', () => {

                expect(users).toEqual([userStub()])
            })
        })
    })
    describe('createUser', () => {
        describe('when createUser is called', () => {
            let user
            let username: "Huongdz2003"

            beforeEach(async () => {
                user = await usersController.createUser(username);
            })

            test('then it should call usersService', () => {
                expect(usersService.createUser).toHaveBeenCalledWith(username);
            })

            test('then it should return a user', () => {
                expect(user).toEqual(userStub())
            })
        })
    })

})