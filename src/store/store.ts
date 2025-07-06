import { configureStore } from "@reduxjs/toolkit";
import { kinopoiskApi } from "./kinopoisk/kinopoiskApi";


const store = configureStore({
  reducer:{
    [kinopoiskApi.reducerPath]:kinopoiskApi.reducer,
    
  }
})

export default store;
export type  RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
