import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
};
const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
  },
});
export const { setLocation } = locationSlice.actions;
export const getLocationState = (state) => state.location.location;
export default locationSlice.reducer;
