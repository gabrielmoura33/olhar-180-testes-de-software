import { CreateUserDTO } from '@application/users/dtos/create-user.dto';
import { InMemoryUsersRepository } from './in-memory-users.repository';

describe('InMemoryUsersRepository', () => {
    let usersRepository: InMemoryUsersRepository;

    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
    });

    describe('findOneByAuthId', () => {
        it('should return a user by authUserId', async () => {
            const createUserDto: CreateUserDTO = { authUserId: 'testAuthUserId' };
            await usersRepository.createUser(createUserDto);

            const user = await usersRepository.findOneByAuthId('testAuthUserId');

            expect(user).not.toBeNull();
            expect(user.authUserId).toBe('testAuthUserId');
        });

        it('should return null if user is not found', async () => {
            const user = await usersRepository.findOneByAuthId('nonExistingId');
            expect(user).toBeNull();
        });
    });

    describe('createUser', () => {
        it('should create a new user', async () => {
            const createUserDto: CreateUserDTO = { authUserId: 'newUser' };

            const newUser = await usersRepository.createUser(createUserDto);

            expect(newUser).not.toBeNull();
            expect(newUser.authUserId).toBe('newUser');
        });
    });

});
