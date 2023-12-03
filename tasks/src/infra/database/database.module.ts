import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { UsersRepository } from 'src/app/users/repositories/users.repository'
import { PrismaUsersRepository } from './prisma/repositories/prisma-users.repository'
import { TasksRepository } from 'src/app/tasks/repositories/tasks.repository'
import { PrismaTasksRepository } from './prisma/repositories/prisma-task.repository'

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
