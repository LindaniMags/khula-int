import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leasedLand: "",
};
const leasedLandSlice = createSlice({
  name: "leasedLand",
  initialState,
  reducers: {
    setLeasedLand: (state, { payload }) => {
      state.leasedLand = payload;
    },
  },
});
export const { setLeasedLand } = leasedLandSlice.actions;
export const getLeasedLandState = (state) => state.leasedLand.leasedLand;
export default leasedLandSlice.reducer;
