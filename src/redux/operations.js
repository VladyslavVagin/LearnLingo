// @ts-nocheck
import { get, ref } from "firebase/database";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { database } from "../firebase/firebase";

// ============================== GET ALL TEACHERS FROM FIREBASE REALTIME DB
export const fetchAllTeachers = createAsyncThunk(
  "teachers/fetchAll",
  async (thunkAPI) => {
    try {
      const dbRef = ref(database, "teachers");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        return snapshot.val();
      }
    } catch (e) {
      toast.error("Database ERROR");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ============================== ADD TEACHER TO FAVORITE
export const addToFavorite = createAsyncThunk(
  "teachers/addFavorite",
  async (id, thunkAPI) => {
    try {
      const dbRef = ref(database, "teachers");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        let allTeachers = snapshot.val();
        let choosenTeacher = allTeachers.find((teacher) => teacher.id === id);
        return choosenTeacher;
      }
    } catch (e) {
      toast.error("Database ERROR");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
