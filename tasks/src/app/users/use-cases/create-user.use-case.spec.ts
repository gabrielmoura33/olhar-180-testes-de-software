import { InMemoryUsersRepository } from "@tests/repositories/in-memory-users.repository";
import { CreateUserUseCase } from "./create-user.use-case";
import { UsersRepository } from "../repositories/users.repository";
import { v4 as uuidv4 } from 'uuid';

describe('CreateUserUseCase', () => {
  let createUserUseCase: CreateUserUseCase;
  let mockUsersRepository: UsersRepository
  beforeEach(() => {
    mockUsersRepository = new InMemoryUsersRepository()
    createUserUseCase = new CreateUserUseCase(mockUsersRepository);
  });

  it('should create a user successfully', async () => {
    const createUserDTO = {
      authUserId: uuidv4(),
    };

    const { user } = await createUserUseCase.execute(createUserDTO);

    expect(user.authUserId).toEqual(createUserDTO.authUserId);    
  });
});
