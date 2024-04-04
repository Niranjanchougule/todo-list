import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        description: action.payload,
        checked: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo
      );
    },
    clearTodos: (state, action) => {
      state.todos = [];
    },
  },
});

export const { addTodo, clearTodos, deleteTodo, toggleTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
