import { CreateTaskUseCase } from './create-task.use-case';
import { TasksRepository } from '../repositories/tasks.repository';
import { InMemoryTaskRepository } from '@tests/repositories/in-memory-task.repository';

describe('CreateTaskUseCase', () => {
  let createTaskUseCase: CreateTaskUseCase;
  let mockTasksRepository: TasksRepository
  beforeEach(() => {
    mockTasksRepository = new InMemoryTaskRepository()

    createTaskUseCase = new CreateTaskUseCase(mockTasksRepository as TasksRepository);
  });

  it('should deactivate a task successfully', async () => {
    const createTaskDto = {
      title: 'Test Task',
      description: 'Test Description',
      priority: 'high',
      date: new Date(),
      userId: '12345',
    } as any;

    const result = await createTaskUseCase.execute(createTaskDto);

    expect(result.title).toEqual(createTaskDto.title);
    expect(result.description).toEqual(createTaskDto.description);
    expect(result.priority).toEqual(createTaskDto.priority);
    expect(result.date).toEqual(createTaskDto.date);
  });
});
