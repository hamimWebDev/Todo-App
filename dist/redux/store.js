"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const todoSlice_1 = __importDefault(require("./features/todoSlice"));
const api_1 = require("./api/api");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        [api_1.baseApi.reducerPath]: api_1.baseApi.reducer,
        todos: todoSlice_1.default,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api_1.baseApi.middleware),
});
