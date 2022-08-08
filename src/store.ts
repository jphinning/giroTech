import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import inputValuesReducer from "./slices/inputValuesSlice";
import showResultsReducer from "./slices/showResultsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    inputs: inputValuesReducer,
    show: showResultsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
