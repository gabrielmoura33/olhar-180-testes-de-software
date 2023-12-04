import { Task } from "./tasks.entity";


describe('Task', () => {
  it('should create an instance of Task', () => {
    const task = new Task();
    expect(task).toBeInstanceOf(Task);
  });  
});