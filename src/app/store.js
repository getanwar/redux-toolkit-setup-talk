import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import logger from "redux-logger";

export default configureStore({
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  reducer: {
    todos: todoReducer,
    counter: counterReducer,
  },
});
