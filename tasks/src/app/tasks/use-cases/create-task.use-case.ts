// create-task.use-case.ts
import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../repositories/tasks.repository';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { Task } from '../entities/tasks.entity';


@Injectable()
export class CreateTaskUseCase {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async execute(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksRepository.createTask(createTaskDto);
  }
}
