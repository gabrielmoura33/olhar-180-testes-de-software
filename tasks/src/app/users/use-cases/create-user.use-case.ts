import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { User } from '../entities/users.entity';


interface CreateUserUseCaseRequestDTO {
  authUserId: string
}
interface CreateUserUseCaseResponseDTO {
  user: User | undefined;
}
@Injectable()
export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    authUserId
  }: CreateUserUseCaseRequestDTO): Promise<CreateUserUseCaseResponseDTO> {
    const userExists = await this.usersRepository.findOneByAuthId(authUserId);

    if (userExists) {
      throw new ForbiddenException('User already exists');
    }

    const user = await this.usersRepository.createUser({
      authUserId
    });

    
    return {
      user,
    };
  }
}
