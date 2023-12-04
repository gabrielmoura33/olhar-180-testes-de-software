import { TasksRepository } from '../repositories/tasks.repository';
import { InMemoryTaskRepository } from '@tests/repositories/in-memory-task.repository';
import { DeleteTaskUseCase } from './delete-task.use-case';
import { GetActiveTasksUseCase } from './get-active-tasks.use-case';
import { GetTaskByIdUseCase } from './get-task-by-id.use-case';

describe('GetTaskByIdUseCase', () => {
  let getTaskById: GetTaskByIdUseCase;
  let mockTasksRepository: TasksRepository
  beforeEach(() => {
    mockTasksRepository = new InMemoryTaskRepository()

    getTaskById = new GetTaskByIdUseCase(mockTasksRepository as TasksRepository);
  });

  it('should get a task by id', async () => {
   
    const task = await getTaskById.execute('4');
   

    expect(task.description).toEqual('Test Description 4');
    expect(task.isActive).toEqual(true);
  });
});
