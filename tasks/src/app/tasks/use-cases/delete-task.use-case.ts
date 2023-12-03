// delete-task.use-case.ts
import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../repositories/tasks.repository';


@Injectable()
export class DeleteTaskUseCase {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async execute(id: string): Promise<void> {
    return await this.tasksRepository.deleteTaskById(id);
  }
}
