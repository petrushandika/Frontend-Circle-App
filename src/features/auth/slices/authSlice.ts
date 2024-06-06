import { createSlice } from "@reduxjs/toolkit";

interface User {
  fullName: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
}

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: {
    fullName: "",
    username: "",
    email: "",
    avatar: "",
    bio: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_AUTH_CHECK: (state, action: { payload: User }) => {
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});

export const { SET_AUTH_CHECK } = authSlice.actions;

export default authSlice.reducer;
