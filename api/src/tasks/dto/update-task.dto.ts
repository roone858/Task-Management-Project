export class UpdateTaskDto {
  taskId?: string;
  userId?: string;
  name?: string;
  description?: string;
  dueDate?: Date;
  isCompleted?: boolean;
}
