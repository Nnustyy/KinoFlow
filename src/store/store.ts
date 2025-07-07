import { configureStore } from "@reduxjs/toolkit";
import { kinopoiskApi } from "./kinopoisk/kinopoiskApi";



const store = configureStore({
  reducer:{
    [kinopoiskApi.reducerPath]:kinopoiskApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
})

export default store;
export type  RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
