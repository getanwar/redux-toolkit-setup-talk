import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [{ text: "hello wlrd", completed: false }],
  reducers: {
    addTodo: (state, action) => {
      const todo = { text: action.payload.text, completed: false };
      state.push(todo);
    },
    toggleTodo: (state, action) => {
      const { index } = action.payload;
      const todo = state[index];
      todo.completed = !todo.completed;
      state[index] = todo;
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export const addTodoAsync = (text) => (dispatch) => {
  return new Promise((res) => {
    setTimeout(() => {
      res("Success");
      dispatch(addTodo({ text }));
    }, 1000);
  });
};

export const getTodos = (state) => state.todos;

export default todoSlice.reducer;
