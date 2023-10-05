import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import showHideSlice from "./showHideSlice";
import categoreSlice from "./categoreSlice";

const store = configureStore({
  reducer: {
    apps: appSlice,
    search:searchSlice,
    chats:chatSlice,
    livechat:showHideSlice,
    categories:categoreSlice
  },
});

export default store;

/*3) 
-Where should I cache this up searchSlice Not it's time to go 🗃️HEADER.js 
-Because we were making an API Call over there in searching 
@NOTE:getSearchSuggestion() here Need to modify 

*/