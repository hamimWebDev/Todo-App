import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TUpdateTodoPayload = {
  id: string;
  title?: string;
  description?: string;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const taskIndex = state.todos.findIndex(
        (item) => item.id === action.payload
      );

      if (taskIndex !== -1) {
        const task = state.todos[taskIndex];
        task.isCompleted = !task.isCompleted;

        if (task.isCompleted) {
          // If the task is completed, move it to the end of the list
          const [completedTask] = state.todos.splice(taskIndex, 1);
          state.todos.push(completedTask);
        } else {
          // If the task is not completed, move it to the top of the list
          const [incompleteTask] = state.todos.splice(taskIndex, 1);
          state.todos.unshift(incompleteTask);
        }
      }
    },
    updateTodo: (state, action: PayloadAction<TUpdateTodoPayload>) => {
      const { id, title, description } = action.payload;
      const taskIndex = state.todos.findIndex((item) => item.id === id);

      if (taskIndex !== -1) {
        const task = state.todos[taskIndex];
        if (title !== undefined && title !== "") task.title = title;
        if (description !== undefined && description !== "")
          task.description = description;
      }
    },
  },
});

const todoReducer = todoSlice.reducer;

export const { addTodo, removeTodo, toggleComplete, updateTodo } =
  todoSlice.actions;

export default todoReducer;
