import { configureStore } from "@reduxjs/toolkit";
import { movieListApi } from "./services/movieListApi";
import sampleSlice from "./features/sampleSlice";
import { sampleApi } from "./services/sampleApi";

export const store = configureStore({
  reducer: {
    sampleSlice: sampleSlice,
    [movieListApi.reducerPath]: movieListApi.reducer,
    [sampleApi.reducerPath]: sampleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieListApi.middleware, sampleApi),
});
