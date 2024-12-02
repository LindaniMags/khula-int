import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dryland: "",
};
const drylandSlice = createSlice({
  name: "dryland",
  initialState,
  reducers: {
    setDryland: (state, { payload }) => {
      state.dryland = payload;
    },
  },
});
export const { setDryland } = drylandSlice.actions;
export const getDrylandState = (state) => state.dryland.dryland;
export default drylandSlice.reducer;
