import { Injectable } from '@nestjs/common'
import { UsersRepository } from '../repositories/users.repository'
import { User } from '../entities/users.entity'

interface FindUserByAuthIdUseCaseRequestDTO {
  authId: string
}
interface FindUserByAuthIdUseCaseResponseDTO {
  user: User | undefined
}
@Injectable()
export class FindUserByAuthIdUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    authId,
  }: FindUserByAuthIdUseCaseRequestDTO): Promise<FindUserByAuthIdUseCaseResponseDTO> {
    const user = await this.usersRepository.findOneByAuthId(authId)

    return {
      user,
    }
  }
}
