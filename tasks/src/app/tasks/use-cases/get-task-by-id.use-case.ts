// use-cases/get-task-by-id.use-case.ts
import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../repositories/tasks.repository';
import { Task } from '../entities/tasks.entity';


@Injectable()
export class GetTaskByIdUseCase {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async execute(id: string): Promise<Task> {
    return await this.tasksRepository.getTaskById(id);
  }
}
