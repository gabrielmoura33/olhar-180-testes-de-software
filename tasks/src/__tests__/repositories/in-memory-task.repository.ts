import { Injectable } from '@nestjs/common';
import { Task } from '@application/tasks/entities/tasks.entity';
import { CreateTaskDto } from '@application/tasks/dtos/create-task.dto';
import { TasksRepository } from '@application/tasks/repositories/tasks.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InMemoryTaskRepository extends TasksRepository {
  public tasks: Task[] = [
    {
      id: '1',
      title: 'Test Task 1',
      description: 'Test Description 1',
      priority: 'high',
      date: new Date(),
      isActive: true,
      userId: '1',
      User: {id: '1', authUserId: 'authUserId1'},
    },
    {
      id: '2',
      title: 'Test Task 2',
      description: 'Test Description 2',
      priority: 'high',
      date: new Date(),
      isActive: false,
      User: {id: '2', authUserId: 'authUserId2'},
      userId: '2',
    },
    {
      id: '3',
      title: 'Test Task 3',
      description: 'Test Description 3',
      priority: 'high',
      date: new Date(),
      isActive: true,
      User: {id: '3', authUserId: 'authUserId3'},
      userId: '3',
    },
    {
      id: '4',
      title: 'Test Task 4',
      description: 'Test Description 4',
      priority: 'high',
      date: new Date(),
      isActive: true,
      userId: '1',
      User: {id: '1', authUserId: 'authUserId1'},
    },
  ];

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
