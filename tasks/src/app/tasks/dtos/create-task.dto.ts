export class CreateTaskDto {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  date: Date;
  userId: string;
  // status: 'open' | 'in_progress' | 'done';
}