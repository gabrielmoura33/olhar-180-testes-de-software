import { UseGuards } from "@nestjs/common";
import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { AuthorizationGuard } from "src/infra/auth/authorization.guard";
import { CurrentUser, AuthUser } from "src/infra/auth/current-user";
import { Task } from "./entities/tasks.entity";
import { CreateTaskUseCase } from "./use-cases/create-task.use-case";
import { DeleteTaskUseCase } from "./use-cases/delete-task.use-case";
import { UpdateTaskUseCase } from "./use-cases/update-task.use-case";
import { CreateTaskInput, UpdateTaskInput } from "./input/create-task.input";
import { FindUserByAuthIdUseCase } from "../users/use-cases/find-user-by-authId.use-case";
import { GetActiveTasksUseCase } from "./use-cases/get-active-tasks.use-case";
import { DeactivateTaskUseCase } from "./use-cases/deactivate-task.use-case";
import { GetTaskByIdUseCase } from "./use-cases/get-task-by-id.use-case";

@Resolver(() => Task)
@UseGuards(AuthorizationGuard)
export class TasksResolver {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly updateTaskUseCase: UpdateTaskUseCase,
    private readonly deleteTaskUseCase: DeleteTaskUseCase,
    private readonly findUserByAuthIdUseCase: FindUserByAuthIdUseCase,
    private readonly getActiveTasksUseCase: GetActiveTasksUseCase,
    private readonly deactivateTaskUseCase: DeactivateTaskUseCase,
    private readonly getTaskByIdUseCase: GetTaskByIdUseCase,
  ) {}

  @Mutation(() => Task)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
    @CurrentUser() user: AuthUser,
  ): Promise<Task> {
    const { user: userDB } = await this.findUserByAuthIdUseCase.execute({
      authId: user.sub,
    });
    
    const newTask = await this.createTaskUseCase.execute({
      ...createTaskInput,
      userId: userDB.id,
    });

    return {
      ...newTask,
    }
  }

  @Mutation(() => Task)
  async updateTask(
    @Args('id') id: string,
    @Args('updateTaskInput') updateTaskDto: UpdateTaskInput,
  ): Promise<Task> {
    return this.updateTaskUseCase.execute(id, updateTaskDto);
  }

  @Mutation(() => Boolean)
  async deleteTask(@Args('id') id: string): Promise<boolean> {
    try {
      await this.deleteTaskUseCase.execute(id);
      return true;
    } catch (error) {
      return false;
    }
  }

  @Query(() => [Task])
  async getActiveTasks(@CurrentUser() user: AuthUser): Promise<Task[]> {
    const { user: userDB } = await this.findUserByAuthIdUseCase.execute({
      authId: user.sub,
    });
    return this.getActiveTasksUseCase.execute(userDB.id);
  }
  @Mutation(() => Boolean)
  async deactivateTask(@Args('id') id: string): Promise<boolean> {
    try {
      await this.deactivateTaskUseCase.execute(id);
      return true;
    } catch (error) {
      return false;
    }
  }
  @Query(() => Task, { nullable: true })
  async getTaskById(@Args('id') id: string): Promise<Task> {
    return this.getTaskByIdUseCase.execute(id);
  }
}
