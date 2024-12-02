import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ownership: "",
};
const ownershipSlice = createSlice({
  name: "ownership",
  initialState,
  reducers: {
    setOwnership: (state, { payload }) => {
      state.ownership = payload;
    },
  },
});
export const { setOwnership } = ownershipSlice.actions;
export const getOwnershipState = (state) => state.ownership.ownership;
export default ownershipSlice.reducer;
