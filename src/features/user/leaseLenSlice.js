import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaseLength: "",
};
const leaseLengthSlice = createSlice({
  name: "leaseLength",
  initialState,
  reducers: {
    setLeaseLength: (state, { payload }) => {
      state.leaseLength = payload;
    },
  },
});
export const { setLeaseLength } = leaseLengthSlice.actions;
export const getLeaseLengthState = (state) => state.leaseLength.leaseLength;
export default leaseLengthSlice.reducer;
