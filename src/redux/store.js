import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './usersSlice'
import { teachersReducer } from './teachersSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    teachers: teachersReducer
  },
})