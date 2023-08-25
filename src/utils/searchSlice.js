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

DEVELOPE LRU CACHE (H.W)
REF: 🔗✈️https://youtu.be/xDEuM5qa0zg?si=HLIrBYjFBsviI3YX
-Least Recently Used (LRU) is one of those DSA algorithms.
-It Basically Come Under the Hood of DSA 
-With the help of One we can Restrict Our Cache to stored only 100 keys [100] If more than that Remove from it Top! While BUILDING SEARCH BAR
-As soon as The object length is increase more than 100 start removing from Top
-It is Special Storage
*/
