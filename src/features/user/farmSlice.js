import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  farm: "",
};
const farmSlice = createSlice({
  name: "farm",
  initialState,
  reducers: {
    getFarm: (state, { payload }) => {
      state.farm = payload;
    },
  },
});
export const { getFarm } = farmSlice.actions;
export const getFarmState = (state) => state.farm.farm;
export default farmSlice.reducer;
