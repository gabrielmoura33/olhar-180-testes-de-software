import { CreateTaskUseCase } from './create-task.use-case';
import { TasksRepository } from '../repositories/tasks.repository';
import { InMemoryTaskRepository } from '@tests/repositories/in-memory-task.repository';
import { DeactivateTaskUseCase } from './deactivate-task.use-case';

describe('DeactivateTaskUseCase', () => {
  let deactivateTaskUseCase: DeactivateTaskUseCase;
  let mockTasksRepository: TasksRepository
  beforeEach(() => {
    mockTasksRepository = new InMemoryTaskRepository()

    deactivateTaskUseCase = new DeactivateTaskUseCase(mockTasksRepository as TasksRepository);
  });

  it('should deactivate a task successfully', async () => {
   const taskId = '1'

    await deactivateTaskUseCase.execute(taskId);
    const task = await mockTasksRepository.getTaskById(taskId);

    expect(task.isActive).toEqual(false);
  });

  it('should not activate a task already deactivated', async () => {
    const taskId = '2'
 
     await deactivateTaskUseCase.execute(taskId);
     const task = await mockTasksRepository.getTaskById(taskId);
 
     expect(task.isActive).toEqual(false);
   });
});
