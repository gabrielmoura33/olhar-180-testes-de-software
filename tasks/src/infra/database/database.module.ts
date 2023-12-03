import { Module } from '@nestjs/common'
import { PrismaService } from '@infra/database/prisma/prisma.service'
import { UsersRepository } from '@application/users/repositories/users.repository'
import { PrismaUsersRepository } from '@infra/database/prisma/repositories/prisma-users.repository'
import { TasksRepository } from '@application/tasks/repositories/tasks.repository'
import { PrismaTasksRepository } from '@infra/database/prisma/repositories/prisma-task.repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: TasksRepository,
      useClass: PrismaTasksRepository
    }
  ],
  exports: [PrismaService, UsersRepository, TasksRepository],
})
export class DatabaseModule {}
