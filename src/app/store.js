import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./storeSlices/todoListSlice";
export const store = configureStore({
  reducer: {
    todoList: todoListSlice,
  },
});
