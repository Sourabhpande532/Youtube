const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      // {"ip":["iphone1","iphon12","iphone13","iphone14"]} merge it see below
      state = {...state, ...action.payload};
    },
  },
});

export const { cacheResult } = searchSlice.actions;

export default searchSlice.reducer;


/*2 
-initialState it suppose to empty Object as per querry
-then pass reducers inside into it pass state & action
- if my 'state' is an empty Object then what'll i pass Let me first demo what would i sent into querry first of all 
-we'll send via Object LIKE {"ip"(key string): ["iphone","iphone11","iphone13"] all are "searchResult"}
-key string mean what you type & searchResult mean that API Provide .... while searching 
-So how this I would add it over here ... this same thing 
-Now above in real this BELOW one 
state = {...action.payload, ...state}; This is basically merge the payload as well as my state 
-put this searchSlice into store
Go 🗃️store.js 
@Note: we muted the state this is how redux is work




*/

/** 1)
 * Ok What is my initialState Now it's time to create Cache for DSA Plays very vital role TC & SC complexity
 * Cache
 * ?Time complexity to search in Array should be  = O(n) it mean you'v to do linear search one by one
 * Some people might be use direct methode "array.indexOf() Or array.includes()" TC same linear = O(n);
 * if i'm search on array
 * E.g [i,ip,iph,iphone] it takes time to count which is Big of O(n) for search iphone but in opposite of that
 * But if i'm search on object
 * E>g {i:,ip:,iph:,iphon:} it quicklly happend and TC is more far better than leaner(O(n))
 * it might be Big O of 1, O(1); know ther term is know as hashmap
 *
 * so you can use this way or there is one more way which is far more better than Object which is
 * new Map(); to search value inside Object
 * --------------
 *  */
