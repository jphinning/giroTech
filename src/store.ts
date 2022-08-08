import { configureStore } from "@reduxjs/toolkit";

import inputValuesReducer from "./slices/inputValuesSlice";
import showResultsReducer from "./slices/showResultsSlice";

export const store = configureStore({
  reducer: {
    inputs: inputValuesReducer,
    show: showResultsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
