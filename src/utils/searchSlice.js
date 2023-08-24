const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      /* {"ip":["iphone1","iphon12","iphone13","iphone14"]} 
    @NOTE:Merge it see below we'r updating our store if Not found searchQuerry value*/
      /* state = {...state, ...action.payload}; Optional  */
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResult } = searchSlice.actions;

export default searchSlice.reducer;

/*
Ref:🔗✈️https://www.javascripttutorial.net/object/javascript-merge-objects/ 
-🎯IT's For Merging Two Object like Object.assign..
-🎯cacheResult info coming from Header.js while dispatch and action; for updating & demonstrate on UI 

*/
