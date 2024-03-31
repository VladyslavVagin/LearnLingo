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
    unsetUser: (users, action) => {
      users.currentUser = null;
      users.isLoggedIn = false;
    }
  },
});

export const { setUser, unsetUser } = usersSlice.actions;
export const selectUser = state => state.users.currentUser;
export const selectIsLoggedIn = state => state.users.isLoggedIn;
export const usersReducer = usersSlice.reducer;