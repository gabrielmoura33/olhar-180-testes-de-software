import { Module } from '@nestjs/common'
import { TasksResolver } from './tasks.resolver'
import { CreateTaskUseCase } from './use-cases/create-task.use-case'
import { DeleteTaskUseCase } from './use-cases/delete-task.use-case'
import { UpdateTaskUseCase } from './use-cases/update-task.use-case'
import { DatabaseModule } from 'src/infra/database/database.module'
import { UsersModule } from '../users/users.module'
import { GetActiveTasksUseCase } from './use-cases/get-active-tasks.use-case'
import { DeactivateTaskUseCase } from './use-cases/deactivate-task.use-case'
import { GetTaskByIdUseCase } from './use-cases/get-task-by-id.use-case'

const USE_CASES = [GetTaskByIdUseCase,CreateTaskUseCase, DeleteTaskUseCase, UpdateTaskUseCase, GetActiveTasksUseCase, DeactivateTaskUseCase]
@Module({
  imports: [DatabaseModule, UsersModule],
  providers: [...USE_CASES, TasksResolver],
})
export class TasksModule {}
