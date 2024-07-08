"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeleteTodoMutation = exports.useUpdateTodoMutation = exports.useAddTodoMutation = exports.useGetTodosQuery = exports.baseApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.baseApi = (0, react_1.createApi)({
    reducerPath: "baseApi",
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: "https://todo-app-backend-seven-omega.vercel.app/",
    }),
    tagTypes: ["todo"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (priority) => {
                const params = new URLSearchParams();
                if (priority) {
                    params.append("priority", priority);
                }
                return {
                    url: "/tasks",
                    method: "GET",
                    params: params,
                };
            },
            providesTags: ["todo"],
        }),
        addTodo: builder.mutation({
            query: (data) => {
                return {
                    url: "/task",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["todo"],
        }),
        deleteTodo: builder.mutation({
            query: (id) => {
                return {
                    url: `/task/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["todo"],
        }),
        updateTodo: builder.mutation({
            query: (options) => {
                return {
                    url: `/task/${options.id}`,
                    method: "PUT",
                    body: options.data,
                };
            },
            invalidatesTags: ["todo"],
        }),
    }),
});
exports.useGetTodosQuery = exports.baseApi.useGetTodosQuery, exports.useAddTodoMutation = exports.baseApi.useAddTodoMutation, exports.useUpdateTodoMutation = exports.baseApi.useUpdateTodoMutation, exports.useDeleteTodoMutation = exports.baseApi.useDeleteTodoMutation;
