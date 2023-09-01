import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMassage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});
export const { addMassage } = chatSlice.actions;
export default chatSlice.reducer;
