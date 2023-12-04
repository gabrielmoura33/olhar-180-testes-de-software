// prisma-tasks-mapper.ts
import { Task as PrismaTask } from '@prisma/client'; 
import { Task } from '@application/tasks/entities/tasks.entity';
import { PrismaTasksMapper } from './prisma-tasks.mapper';

describe('PrismaTasksMapper', () => {
  describe('toDomain', () => {
    it('should correctly map a PrismaTask to a Task', () => {
      // Mock de um objeto PrismaTask
      const mockPrismaTask: PrismaTask = {
        id: '1',
        title: 'Test Task',
        description: 'This is a test task',
        date: new Date('2023-12-04'),
        priority: 'high',
        userId: 'user123',
        isActive: true,
        createdAt: new Date('2023-12-03'),
        updatedAt: new Date('2023-12-03'),
      };

      const result = PrismaTasksMapper.toDomain(mockPrismaTask);

      expect(result).toEqual({
        id: mockPrismaTask.id,
        title: mockPrismaTask.title,
        description: mockPrismaTask.description,
        date: mockPrismaTask.date,
        priority: mockPrismaTask.priority,
        userId: mockPrismaTask.userId,
        isActive: mockPrismaTask.isActive,
      });
    });
  });
});
