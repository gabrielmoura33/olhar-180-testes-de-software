import { CreateTaskDto } from '@application/tasks/dtos/create-task.dto';
import { InMemoryTaskRepository } from './in-memory-task.repository';

describe('InMemoryTaskRepository', () => {
  let taskRepository: InMemoryTaskRepository;

  beforeEach(() => {
    taskRepository = new InMemoryTaskRepository();
  });

  describe('createTask', () => {
    it('should create a new task and return it', async () => {
      const taskDto: CreateTaskDto = {
        title: 'Test Task',
        description: 'Test Description',
        priority: 'low',
        date: new Date(),
        userId: '123',
      };

      const task = await taskRepository.createTask(taskDto);

      expect(task).toMatchObject(taskDto);
      expect(task).toHaveProperty('id');
    });
  });

  describe('updateTaskById', () => {
    it('should update a task and return the updated task', async () => {
      // Primeiro, crie uma tarefa
      const taskDto: CreateTaskDto = {
        title: 'Test Task',
        description: 'Test Description',
        priority: 'low',
        date: new Date(),
        userId: '123',
      };
      const task = await taskRepository.createTask(taskDto);

      // Atualize a tarefa
      const updatedTask = await taskRepository.updateTaskById(task.id, {
        title: 'Updated Task',
      });

      expect(updatedTask).toHaveProperty('title', 'Updated Task');
    });
  });

  describe('deleteTaskById', () => {
    it('should delete a task', async () => {
      // Crie uma tarefa
      const taskDto: CreateTaskDto = {
        title: 'Test Task',
        description: 'Test Description',
        priority: 'low',
        date: new Date(),
        userId: '123',
      };
      const task = await taskRepository.createTask(taskDto);

      // Delete a tarefa
      await taskRepository.deleteTaskById(task.id);

      // Tente recuperar a tarefa
      const retrievedTask = await taskRepository.getTaskById(task.id);
      expect(retrievedTask).toBeNull();
    });
  });

  // Continue adicionando testes para os outros métodos...

});
