import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTeachers } from "./operations";

const initialState = {
  teachers: [],
  favorites: [],
  isLoadTeachers: false,
  error: false
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTeachers.fulfilled, (state, { payload }) => {
        state.teachers = payload;
        state.isLoadTeachers = false;
        state.error = false;
    })
    .addCase(fetchAllTeachers.pending, (state, {payload}) => {
        state.isLoadTeachers = true;
    })
    .addCase(fetchAllTeachers.rejected, (state, {payload}) => {
        state.isLoadTeachers = false;
        state.error = true;
    })
  },
});

export const selectTeachers = state => state.teachers.teachers;
export const selectIsLoadTeachers = state => state.teachers.isLoadTeachers;
export const selectError = state => state.teachers.error;

export const teachersReducer = teachersSlice.reducer;
