export interface Task {
  taskId: string;
  userId: string;
  name: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

export interface TaskState {
  tasks: Task[];
}
