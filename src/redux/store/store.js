import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todoApi } from "../rtk query/todoQuery";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducerPath,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);
