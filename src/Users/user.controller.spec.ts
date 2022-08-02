import { MongooseModule } from "@nestjs/mongoose"
import { Test, TestingModule } from "@nestjs/testing"
import mongoose from "mongoose"
import { userStub } from "./test/stubs/user.stub"
import { fvGameSchema } from "./../FavoriteGame/fvgame.model"
import { UsersController } from "./user.controller"
import { UserSchema } from "./user.model"
import { UsersService } from "./user.service"
import { gameSchema } from "./../Games/game.model"
jest.setTimeout(30000);
describe('UserController', () => {
    let userController: UsersController
    let userService: UsersService
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService],
            imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), MongooseModule.forRoot('mongodb+srv://huongdz2003:Huongdzcogisai2003@nodeexpressprojects.ybqix.mongodb.net/ListFavoriteGame'), MongooseModule.forFeature([{ name: 'FvGame', schema: fvGameSchema }]), MongooseModule.forFeature([{ name: "Game", schema: gameSchema }])]
        }).compile()

        userController = module.get<UsersController>(UsersController)
        userService = module.get<UsersService>(UsersService)
        jest.clearAllMocks()
    })

    //Get User
    describe('getUser', () => {
        describe('When getUser is called ', () => {
            let id = "62e890acb104b50a71315038"
            let objId = new mongoose.Types.ObjectId("62e890acb104b50a71315038")
            let userTest = {
                _id: objId,
                // id: "62e890acb104b50a71315038",
                username: "huongdz200321",
                __v: 0,
                // FavoriteGame: []
            }
            test('then it should return user', async () => {
                let user = (await userService.getUser(id)).toObject();
                expect(user).toEqual(userTest)
            })
        })

        describe('When getUser is called ', () => {
            let id = "62de6a2ab968a769c2c01584"

            test('then it should return message error', async () => {
                try {
                    let user = await userService.getUser(id)

                } catch (err) {

                    expect(err.response.message).toEqual("User does not exist")
                }
            })
        })
    })

    // Create User
    describe('createUser', () => {
        describe('When createUser is called ', () => {
            test('Username must not have special character', async () => {
                try {
                    let username = 'huongdz@2003'
                    let user = await userService.createUser(username)

                } catch (err) {
                    expect(err.response.message).toEqual("Username must not have special characters")
                }
            })

            test('Username must less than 50 characters', async () => {
                try {
                    let username = 'huonghuonghuonghuonghuonghuonghuonghuonghuonghuonghuonghuonghuong'
                    let user = await userService.createUser(username)

                } catch (err) {
                    expect(err.response.message).toEqual("Username must less than 50 characters")
                }
            })

            test('Username must not be empty', async () => {
                try {
                    let username = ''
                    let user = await userService.createUser(username)

                } catch (err) {
                    expect(err.response.message).toEqual("Username must not be empty")
                }
            })

            test('User exist', async () => {
                try {
                    let username = 'huong123'
                    let user = await userService.createUser(username)

                } catch (err) {
                    expect(err.response.message).toEqual("User exist")
                }
            })
            test('should return user', async () => {
                let username = 'huongbuiabc'
                await userService.deleteUser(username)
                let user = await (await userService.createUser(username)).toObject()
                let id = user._id.toString()
                let userTest = await (await userService.getUser(id)).toObject()
                expect(user).toEqual(userTest)
            })

        })
    })

    // Get All Users
    describe('getAllUsers', () => {
        describe('when getAllUsers is called', () => {
            test('then is should return users', async () => {
                const usersTest = `{
      _id: new ObjectId("62d926ec1e5612b8e48a0dc4"),
      username: 'Huongdz2003',
      createAt: 2022-07-21T10:14:00.319Z,
      __v: 0
    },{
      _id: new ObjectId("62d927371e5612b8e48a0dc6"),
      username: 'hahahehe',
      createAt: 2022-07-21T10:14:00.319Z,
      __v: 0
    },{
      _id: new ObjectId("62de6a2ab968a769c2c01583"),
      name: 'huongdz20033',
      createAt: 2022-07-25T10:01:52.339Z,
      __v: 0
    },{
      _id: new ObjectId("62de6e08ce47e1249c40e1f8"),
      username: 'huongz2003',
      createAt: 2022-07-25T10:18:42.898Z,
      __v: 0
    },{
      _id: new ObjectId("62e784e9095c3507e3e43590"),
      username: 'huongdz',
      __v: 0
    },{
      _id: new ObjectId("62e88655706cbd279f83c310"),
      username: 'huong123',
      __v: 0
    },{
      _id: new ObjectId("62e890acb104b50a71315038"),
      username: 'huongdz200321',
      __v: 0
    },{
      _id: new ObjectId("62e8d3ae832571edfdb0e26f"),
      username: 'huongbuiabc',
      __v: 0
    }`
                let users = await (await userService.getAllUser()).toString()
                let check = users.localeCompare(usersTest)
                expect(check).toBeTruthy()
            })
        })
    })
})

