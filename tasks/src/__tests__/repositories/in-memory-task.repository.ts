import { Injectable } from '@nestjs/common';
import { Task } from '@application/tasks/entities/tasks.entity';
import { CreateTaskDto } from '@application/tasks/dtos/create-task.dto';
import { TasksRepository } from '@application/tasks/repositories/tasks.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InMemoryTaskRepository extends TasksRepository {
  private tasks: Task[] = [];

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const id = uuidv4();
    const newTask: Task = {
      ...createTaskDto,
      id,      
      isActive: true,
      User: {id, authUserId: 'authUserId' + id},
    };

    this.tasks.push(newTask);
    return newTask;
  }

  async updateTaskById(id: string, updateTaskDto: Partial<CreateTaskDto>): Promise<Task> {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex < 0) return null;

    this.tasks[taskIndex] = {
      ...this.tasks[taskIndex],
      ...updateTaskDto,
    };

    return this.tasks[taskIndex];
  }

  async deleteTaskById(id: string): Promise<void> {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex >= 0) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  async getActiveTasksByUserId(userId: string): Promise<Task[]> {
    return this.tasks.filter(task => task.userId === userId && task.isActive);
  }

  async deactivateTask(id: string): Promise<void> {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex >= 0) {
      this.tasks[taskIndex].isActive = false;
    }
  }

  async getTaskById(id: string): Promise<Task> {
    return this.tasks.find(task => task.id === id) || null;
  }
}
