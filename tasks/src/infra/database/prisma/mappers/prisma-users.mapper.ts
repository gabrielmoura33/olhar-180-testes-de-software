import { User } from '@prisma/client'
import { User as UserDomain } from 'src/app/users/entities/users.entity'
export class PrismaUsersMapper {
  static toDomain(raw: User): Partial<UserDomain> {
    return {
      id: raw?.id,
      authUserId: raw?.authUserId,
    }
  }
}
