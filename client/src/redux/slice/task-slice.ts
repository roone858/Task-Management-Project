// taskSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TaskState } from "../../types/types";
import taskService from "../../services/tasks.service";
import { getUserFromLocalStorage } from "../../utils/localstorage";

const initialState: TaskState = {
  list: [],
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchTasks: any = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    const userID = getUserFromLocalStorage().userId;
    const response = await taskService.getTasksForUser(userID);
    return response;
  }
);
const taskSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const userID = getUserFromLocalStorage().userId;
      const newTask: Task = {
        taskId: action.payload.taskId,
        userId: userID,
        name: action.payload.name,
        dueDate:action.payload.dueDate,
        description: action.payload.description,
        isCompleted: false,
      };
      state.list.push(newTask);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.list.find((task) => task.taskId === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    updateTask: (
      state,
      action: PayloadAction<{ taskId: string; task: Task }>
    ) => {
      const task = state.list.find(
        (task) => task.taskId === action.payload.taskId
      );
      if (task) {
        task.name = action.payload.task.name;
        task.description = action.payload.task.description;
        task.dueDate =action.payload.task.dueDate;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(
        (task: Task) => task.taskId !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      return { ...state, list: action.payload, isLoading: false };
    });
  },
});

export const { addTask, toggleTask, removeTask, updateTask } =
  taskSlice.actions;
export default taskSlice.reducer;
