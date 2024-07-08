"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.toggleComplete = exports.removeTodo = exports.addTodo = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    todos: [],
};
const todoSlice = (0, toolkit_1.createSlice)({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(Object.assign(Object.assign({}, action.payload), { isCompleted: false }));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            const taskIndex = state.todos.findIndex((item) => item.id === action.payload);
            if (taskIndex !== -1) {
                const task = state.todos[taskIndex];
                task.isCompleted = !task.isCompleted;
                if (task.isCompleted) {
                    // If the task is completed, move it to the end of the list
                    const [completedTask] = state.todos.splice(taskIndex, 1);
                    state.todos.push(completedTask);
                }
                else {
                    // If the task is not completed, move it to the top of the list
                    const [incompleteTask] = state.todos.splice(taskIndex, 1);
                    state.todos.unshift(incompleteTask);
                }
            }
        },
        updateTodo: (state, action) => {
            const { id, title, description } = action.payload;
            const taskIndex = state.todos.findIndex((item) => item.id === id);
            if (taskIndex !== -1) {
                const task = state.todos[taskIndex];
                if (title !== undefined && title !== "")
                    task.title = title;
                if (description !== undefined && description !== "")
                    task.description = description;
            }
        },
    },
});
const todoReducer = todoSlice.reducer;
_a = todoSlice.actions, exports.addTodo = _a.addTodo, exports.removeTodo = _a.removeTodo, exports.toggleComplete = _a.toggleComplete, exports.updateTodo = _a.updateTodo;
exports.default = todoReducer;
