import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginState, User } from "../../types/types";

const initialState: LoginState = {
  username: null,
  userId: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.username = action.payload.username;
      state.userId = action.payload.userId;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.username = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  loginSlice.actions;

export default loginSlice.reducer;
