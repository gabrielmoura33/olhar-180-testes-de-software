// use-cases/get-active-tasks.use-case.ts
import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../repositories/tasks.repository';
import { Task } from '../entities/tasks.entity';

@Injectable()
export class GetActiveTasksUseCase {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async execute(userId: string): Promise<Task[]> {
    return await this.tasksRepository.getActiveTasksByUserId(userId);
  }
}
