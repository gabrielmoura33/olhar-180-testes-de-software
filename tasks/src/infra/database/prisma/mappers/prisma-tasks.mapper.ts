// prisma-tasks-mapper.ts
import { Task as PrismaTask } from '@prisma/client'; 
import { Task } from 'src/app/tasks/entities/tasks.entity';


export class PrismaTasksMapper {
  static toDomain(raw: PrismaTask): Partial<Task> {
    return {
      id: raw.id,
      title: raw.title,
      description: raw.description,
      date: raw.date,
      priority: raw.priority,
      userId: raw.userId,      
      isActive: raw.isActive,
    };
  }
}
