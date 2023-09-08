import { createSlice } from "@reduxjs/toolkit";

const showHideSlice = createSlice({
  name:"LiveChat",
  initialState:{
    isChatOpen:false,
  },  
  reducers:{
    toggleChat:(state)=>{
        state.isChatOpen = !state.isChatOpen;
    }
  }
})
export const {toggleChat} = showHideSlice.actions;
export default showHideSlice.reducer;
