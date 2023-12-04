import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '@application/users/dtos/create-user.dto';
import { UsersRepository } from '@application/users/repositories/users.repository';
import { User } from '@application/users/entities/users.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InMemoryUsersRepository implements UsersRepository {
    private users: User[] = [{
        id: '1',
        authUserId: '12345',
    }];

    async findOneByAuthId(authUserId: string): Promise<User> {
        return this.users.find(user => user.authUserId === authUserId) || null;
    }

    async createUser(createUserDto: CreateUserDTO): Promise<User> {
        const newUser: User = {
            id: uuidv4(),
            ...createUserDto,
        };

        this.users.push(newUser);
        return newUser;
    }

}
