// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoggedIn: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (users, action) => {
      users.currentUser = action.payload;
      users.isLoggedIn = true;
    },
  },
});

export const { setUser } = usersSlice.actions;
export const selectUser = state => state.users.currentUser;
export const selectIsLoggedIn = state => state.users.isLoggedIn;
export const usersReducer = usersSlice.reducer;