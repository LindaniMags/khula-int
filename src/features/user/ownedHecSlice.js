import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ownedHec: "",
};
const ownedHecSlice = createSlice({
  name: "ownedHec",
  initialState,
  reducers: {
    setOwnedHec: (state, { payload }) => {
      state.ownedHec = payload;
    },
  },
});
export const { setOwnedHec } = ownedHecSlice.actions;
export const getOwnedHecState = (state) => state.ownedHec.ownedHec;
export default ownedHecSlice.reducer;
