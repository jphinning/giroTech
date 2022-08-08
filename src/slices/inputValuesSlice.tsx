import { createSlice } from "@reduxjs/toolkit";

interface InputValuesState {
  investedMoney: string;
  deadline: string;
  interest: string;
}

const initialState: InputValuesState = {
  investedMoney: "",
  deadline: "",
  interest: "",
};

export const inputValuesSlice = createSlice({
  name: "inputValues",
  initialState,
  reducers: {
    setValues: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setValues } = inputValuesSlice.actions;

export default inputValuesSlice.reducer;
