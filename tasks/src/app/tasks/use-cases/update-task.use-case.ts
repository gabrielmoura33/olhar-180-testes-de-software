// update-task.use-case.ts
import { Injectable } from '@nestjs/common';

import { CreateTaskDto } from '../dtos/create-task.dto';
import { TasksRepository } from '../repositories/tasks.repository';
import { Task } from '../entities/tasks.entity';
import { CreateTaskInput } from '../input/create-task.input';


@Injectable()
export class UpdateTaskUseCase {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async execute(id: string, createTaskInput: Partial<CreateTaskInput>): Promise<Task> {
    return await this.tasksRepository.updateTaskById(id, createTaskInput);
  }
}
