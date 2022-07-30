import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => ({
        url: "todos",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllTodosQuery } = todoApi;
