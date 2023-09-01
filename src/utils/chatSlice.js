import { createSlice } from "@reduxjs/toolkit";
import { LIVE_MESSAGE_COUNT } from "./constant";


const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMassage: (state, action) => {
      state.messages.splice(LIVE_MESSAGE_COUNT,1);
      state.messages.unshift(action.payload);
    },
  },
});
export const { addMassage } = chatSlice.actions;
export default chatSlice.reducer;
