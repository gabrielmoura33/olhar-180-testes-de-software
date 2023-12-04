import { TasksRepository } from '../repositories/tasks.repository';
import { InMemoryTaskRepository } from '@tests/repositories/in-memory-task.repository';
import { DeleteTaskUseCase } from './delete-task.use-case';

describe('DeleteTaskUseCase', () => {
  let deleteTaskUseCase: DeleteTaskUseCase;
  let mockTasksRepository: TasksRepository
  beforeEach(() => {
    mockTasksRepository = new InMemoryTaskRepository()

    deleteTaskUseCase = new DeleteTaskUseCase(mockTasksRepository as TasksRepository);
  });

  it('should delete a task successfully', async () => {
   const taskId = '1'

    await deleteTaskUseCase.execute(taskId);
    const task = await mockTasksRepository.getTaskById(taskId);

    expect(task).toEqual(null);
  });
});
