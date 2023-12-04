import { InMemoryUsersRepository } from "@tests/repositories/in-memory-users.repository";
import { FindUserByAuthIdUseCase } from "./find-user-by-authId.use-case";
import { UsersRepository } from "../repositories/users.repository";

describe('FindUserByAuthIdUseCase', () => {
  let findUserByAuthIdUseCase: FindUserByAuthIdUseCase;
  let mockUsersRepository: UsersRepository
  beforeEach(() => {
    mockUsersRepository = new InMemoryUsersRepository()
    findUserByAuthIdUseCase = new FindUserByAuthIdUseCase(mockUsersRepository);
  });

  it('should find user with authID', async () => {
   
    const { user } = await findUserByAuthIdUseCase.execute({
      authId: '12345'
    });
   

    expect(user.authUserId).toEqual('12345');
    expect(user.id).toEqual('1');
  });
});
