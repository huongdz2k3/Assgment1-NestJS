import { userStub } from "../test/stubs/user.stub";

export const UsersService = jest.fn().mockReturnValue({
    getUser: jest.fn().mockResolvedValue(userStub()),
    getAllUser: jest.fn().mockResolvedValue([userStub()]),
    createUser: jest.fn().mockResolvedValue(userStub())

})