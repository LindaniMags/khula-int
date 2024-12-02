import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  choice: "",
};
const choiceSlice = createSlice({
  name: "choice",
  initialState,
  reducers: {
    setChoice: (state, { payload }) => {
      state.choice = payload;
    },
  },
});
export const { setChoice } = choiceSlice.actions;
export const getChoiceState = (state) => state.choice.choice;
export default choiceSlice.reducer;
