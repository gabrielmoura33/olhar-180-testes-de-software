import { CreateTaskDto } from "../dtos/create-task.dto";
import { Task } from "../entities/tasks.entity";

export abstract class TasksRepository {
  abstract createTask(createTaskDto: CreateTaskDto): Promise<Task>;  
  abstract updateTaskById(id: string, createTaskDto: Partial<CreateTaskDto>): Promise<Task>;  
  abstract deleteTaskById(id: string): Promise<void>;
  abstract getActiveTasksByUserId(userId: string): Promise<Task[]>;
  abstract getTaskById(id: string): Promise<Task>;
  abstract deactivateTask(id: string): Promise<void>;
}