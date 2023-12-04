import { TasksRepository } from '../repositories/tasks.repository';
import { InMemoryTaskRepository } from '@tests/repositories/in-memory-task.repository';
import { DeleteTaskUseCase } from './delete-task.use-case';
import { GetActiveTasksUseCase } from './get-active-tasks.use-case';

describe('GetActiveTasksUseCase', () => {
  let getActiveTasks: GetActiveTasksUseCase;
  let mockTasksRepository: TasksRepository
  beforeEach(() => {
    mockTasksRepository = new InMemoryTaskRepository()

    getActiveTasks = new GetActiveTasksUseCase(mockTasksRepository as TasksRepository);
  });

  it('should get all active tasks for a certain user', async () => {
   
    const taskList = await getActiveTasks.execute('1');
   

    expect(taskList.length).toEqual(2);
  });
});
