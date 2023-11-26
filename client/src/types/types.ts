export interface Task {
  taskId?: string;
  userId: string;
  name: string;
  description: string;
  dueDate: Date;
  isCompleted: boolean;
}

export interface User {
  userId: string;
  username: string;
  email: string;
  password: string;
}

export interface TaskState {
  list: Task[];
}

export interface LoginState {
  username: string | null;
  userId: string | null;

  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}
export interface State {
  tasks: TaskState;
  login: LoginState;
}
