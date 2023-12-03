import { Module } from '@nestjs/common'
import { UsersResolver } from './users.resolver'
import { DatabaseModule } from 'src/infra/database/database.module'
import { FindUserByAuthIdUseCase } from './use-cases/find-user-by-authId.use-case'
import { CreateUserUseCase } from './use-cases/create-user.use-case'

@Module({
  imports: [DatabaseModule],
  providers: [FindUserByAuthIdUseCase,CreateUserUseCase, UsersResolver],
  exports: [FindUserByAuthIdUseCase,CreateUserUseCase]
})
export class UsersModule {}
