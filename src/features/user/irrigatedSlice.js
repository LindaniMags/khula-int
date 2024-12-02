import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  irrigated: "",
};
const irrigatedSlice = createSlice({
  name: "irrigated",
  initialState,
  reducers: {
    setIrrigated: (state, { payload }) => {
      state.irrigated = payload;
    },
  },
});
export const { setIrrigated } = irrigatedSlice.actions;
export const getIrrigatedState = (state) => state.irrigated.irrigated;
export default irrigatedSlice.reducer;
