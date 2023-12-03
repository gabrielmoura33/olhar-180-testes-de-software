import { Injectable } from '@nestjs/common'
import { CreateUserDTO } from 'src/app/users/dtos/create-user.dto'
import { UsersRepository } from 'src/app/users/repositories/users.repository'
import { PrismaService } from '../prisma.service'
import { PrismaUsersMapper } from '../mappers/prisma-users.mapper'
import { User } from 'src/app/users/entities/users.entity'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}

  public async findOneByAuthId(authUserId: string) {
    const newUser = await this.prismaService.user.findUnique({
      where: {
        authUserId,
      },
    })

    return PrismaUsersMapper.toDomain(newUser) as User
  }

  public async createUser({ authUserId }: CreateUserDTO) {
    return this.prismaService.user.create({
      data: {
        authUserId,
      },
    })
  }
}
