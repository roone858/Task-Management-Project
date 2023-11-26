import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from "./slice/task-slice";
import loginSlice from "./slice/login-slice";

export const store = configureStore({
  reducer: {
    tasks: TasksSlice,
    login: loginSlice,
  },
});
