import { configureStore } from "@reduxjs/toolkit";
import { api } from "../shared/lib/api";
import { authSlice } from "../shared/lib/slice/authSlice";

const rootReducer = {
  [api.reducerPath]: api.reducer,
  [authSlice.reducerPath]: authSlice.reducer
}

const apiMiddleware = [api.middleware];

export const store = configureStore({
  reducer: {
    ...rootReducer,
  },
  middleware: getDefaultMiddleware=>getDefaultMiddleware().concat(...apiMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
