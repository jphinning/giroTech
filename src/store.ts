import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import inputValuesReducer from "./slices/inputValuesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    inputs: inputValuesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
