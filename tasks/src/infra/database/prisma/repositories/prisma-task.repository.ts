import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

import { CreateTaskDto } from 'src/app/tasks/dtos/create-task.dto';

import { TasksRepository } from 'src/app/tasks/repositories/tasks.repository';
import { PrismaTasksMapper } from '../mappers/prisma-tasks.mapper';
import { Task } from 'src/app/tasks/entities/tasks.entity';


@Injectable()
export class PrismaTasksRepository extends TasksRepository {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description, date, priority, userId } = createTaskDto;
    const task = await this.prismaService.task.create({
      data: {
        title,
        description,
        date,
        priority,
        userId,
      },
    });
    return PrismaTasksMapper.toDomain(task) as Task;
  }

  async updateTaskById(id: string, createTaskDto: Partial<CreateTaskDto>): Promise<Task> {
    const task = await this.prismaService.task.update({
      where: { id },
      data: createTaskDto,
    });
    return PrismaTasksMapper.toDomain(task) as Task;
  }

  async deleteTaskById(id: string): Promise<void> {
    await this.prismaService.task.delete({
      where: { id },
    });
  }

  async getActiveTasksByUserId(userId: string): Promise<Task[]> {
    const tasks = await this.prismaService.task.findMany({
      where: {
        userId,
        
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    return tasks.map(task => PrismaTasksMapper.toDomain(task)) as Task[];
  }

  public async deactivateTask(id: string): Promise<void> {
    await this.prismaService.task.update({
      where: { id },
      data: { isActive: false },
    });
  }

  public async getTaskById(id: string): Promise<Task> {
    const task = await this.prismaService.task.findUnique({
      where: { id },
    });
    return PrismaTasksMapper.toDomain(task) as Task;
  }
}
