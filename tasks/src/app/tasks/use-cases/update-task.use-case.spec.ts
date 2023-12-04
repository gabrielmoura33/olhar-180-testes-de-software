import { UpdateTaskUseCase } from './update-task.use-case';
import { TasksRepository } from '../repositories/tasks.repository';
import { InMemoryTaskRepository } from '@tests/repositories/in-memory-task.repository';

describe('UpdateTaskUseCase', () => {
  let updateTaskUseCase: UpdateTaskUseCase;
  let mockTasksRepository: TasksRepository
  beforeEach(() => {
    mockTasksRepository = new InMemoryTaskRepository()
    updateTaskUseCase = new UpdateTaskUseCase(mockTasksRepository as TasksRepository);
  });

  it('should update a task successfully', async () => {
    const createTaskDto = {
      title: 'Test Task UPDATED',
      description: 'Test Description UPDATED',
      priority: 'high',
      date: new Date(),
      userId: '12345',
    } as any;

    const result = await updateTaskUseCase.execute('1', createTaskDto);

    expect(result.title).toEqual(createTaskDto.title);
    expect(result.description).toEqual(createTaskDto.description);
    expect(result.priority).toEqual(createTaskDto.priority);
    expect(result.date).toEqual(createTaskDto.date);
    expect(result.userId).toEqual(createTaskDto.userId);
  });
});
