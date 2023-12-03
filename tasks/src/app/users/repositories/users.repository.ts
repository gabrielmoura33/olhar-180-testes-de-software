import { User } from '../entities/users.entity'
import { CreateUserDTO } from '../dtos/create-user.dto'

export abstract class UsersRepository {
  abstract findOneByAuthId(authUserId: string): Promise<User | undefined>
  abstract createUser({ authUserId }: CreateUserDTO): Promise<User>
}
