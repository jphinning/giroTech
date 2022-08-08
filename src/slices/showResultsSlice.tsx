import { createSlice } from "@reduxjs/toolkit";

interface ShowResultsState {
  show: boolean;
}

const initialState: ShowResultsState = {
  show: false,
};

export const showResultsSlice = createSlice({
  name: "showResults",
  initialState,
  reducers: {
    toggleResult: (state) => {
      return { ...state, show: true };
    },
  },
});

export const { toggleResult } = showResultsSlice.actions;

export default showResultsSlice.reducer;
