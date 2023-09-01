/* 
Need to colaps of My sidebar with clicking on hamburger Menu So How Will do That?
-use Redux store
-instead of state and all complication use redux store it is globally use & make our work easier thatn easy?
-How would we perform redux process 

-npm i @redux/toolkit
-npm i react-redux
-create store.js 
-then create slice 
-attach store to Provider at parent folder which is App.js 
-
Search: -youtube api key auth
        -Youtube video api
Ref: 🔗✈️https://console.cloud.google.com/apis/credentials?project=infra-rhino-396209
Ref: 🔗✈️https://developers.google.com/youtube/v3/docs/videos/list

Where should i make API Call in 🗃️videoCantainer.js file 

@NOTE: Ensure Don't start directly with map Alway start with 0 e.g videos[0] like that 






-------------------------------SECTION---------------------------
@TITLE_OF-DYANAMIC_ROUTING
@LOCATION: 🗃️WATCHPAGE.JS && 🗃️APP.JS 
@HINT: BELOW appRouter Notes How It's Work  
@IDENTIFIER: ^^
@Task: The Task is befour Header & footer Remain Same While Clicking on Video any video How would you perform this stuff!


 -🎯To render this page on via click on video 
 -🎯First Need to set Router on 🗃️App.js 
 -🎯createBrowserRouter first then it expect Array of an Object [{}]
 -🎯then Childern also mandatory 
 -🎯Fact of Childern is where you defined Or mention "OUTLET" it will shoot out by the term it mean it'll mute/change 

-🎯First thing to note wherever i'll give appRouter my app will render over there or Act According as exact you want!
  -🎯if my path is "/" slash my Body will be render below <Head/> as i shoot appRouter overThere;
  -🎯@Childern: it goes wherever My OUTLET exits
  -🎯Now the path is "/"(slash) what children should be render in my Outlet see in Childern [...] i.e nothing but is <MainContainer/>

  -🎯What should I render here is it App.js or other on click
  -🎯For that need to create partial route what should on my App(UI)  
  -🎯As I click on App(Body-Video Cart) should my sidebar & header changes or Remain Same obivious Remain Same
  -🎯Only {Body} VideoCard Get changes Have you NOTICE(While going to "/watchPage") 
  -🎯For those Portion Need to work Only i.e mention Body in appRouter when my slash is "/";
  -🎯Which components you want to change over there need to mention <RouterProvider router={appRouter}/>
  -🎯Now body has Childern overIt did you see <Sidebar/> and <MainContainer/>
  -🎯So As per Task Or Route my <MainContainer/> should be Replace with <WatchPage/> either we want both of them At a time"/WatchPage" so in order to do that we Need to mention OUTLET from React router dom 
  -🎯GIVEN Fact of Childern is wherever you mention Outlet it shoot or change

  Q)How will I configured what'll be the render inside my Outlet!

-------------------------------SECTION---------------------------
@TITLE: HIGHER-ORDER COMPONENT
@LOCATION:
@HINT: 

Higher Order Components 
Ref:✈️🔗https://legacy.reactjs.org/docs/higher-order-components.html

-🎯It is basically taking a Components & return Components but this time it comes with Modification Upadated one 
-🎯Concretely, a higher-order component is a function that takes a component and returns a new component.
-🎯WHY would I need it Higher Order function Let suppose you want do small Modification on top of you'r video Card by mean Uniqu stuff while click on Youtube Videos you'll notice at any one video which is uniqe one where they mention ad,view all or something Unique which makes different from other!
-🎯for More Clarification go 🗃️component/VideoCard.js see we apply border at one video  


-----------------------))-------------------------
@DEBOUNCING  
-🎯It is Not making an API Call on every Key press talk about flipcart website just like Youtube(it makes Api call on every key press)
-🎯So this concept know as ""Debouncing"" DEBOUNICING 
-🎯IF I'M WRITTING FAST IT JUST SKIP SOME EVENT WHICH

WHAT IS DEBOUNCING??
-🎯It says if you'r typing very fast then Difference Between Two key Stroke is very less
-🎯Let suppose I'm typing slow Then Difference Between Two key Storke is very High 
-Ensure That Talk about while searching on searchbar 

E.g 
🔻Typing slow = 200ms 
🔻Typing fast = 20ms 

Q) If user is very fast typing Does that mean I need to show suggestions?

-🎯Obivious No it does'nt need for intermediate result if it typing slow then Need it must show while searching
-🎯it is like useLess to call API every Storke key code 
-🎯OLD Developer Had Convenction It's hardely makes a Difference instead of 7 API call You made 3 API Call but it's not ... But NOT SEANARIO Change 
-🎯This are the small thing increase your PERFORMANCE 

🤔HOW IT GONNA HELP ??

PERFORMANCE💃: 
IF I AM WRITTING 14 LETTER(+iphone pro max) & Lets Suppose There is 1000 Student 
🔻# 14 * 1000 = 140000 
Here 14 thousand time call API 

But, WITH DEBOUNCING Same 14 Letter 
🔻# 3 API Calls * 1000 = 3000 
Here 3 thousand Time call Did you see The Difference take e.g of flipcart website  

@NOTE:For Doing so it gives a good user Experience first wait till you click the button then show result 

💃✈️DEBOUNCING WITH 200ms 
-🎯If difference Between 2 key Stroke is less than < 200ms(Suppose you fast type No Need to show suggestions) - Decline API Call(NOT CALL API)
-🎯if Difference is Greter than <200ms(suppose you slow type then Need to show suggestions) Between 2 key Stroke - MAKE API CALL 

@FACT: Then Why Youtube call API on every PRESS KEY Because Debouncing is very less instead of 200ms might be 100ms or 50ms but DEBOUNCING is over there you can't say it's not there

@SEARCH_Word: google search suggestions api 
Ref: https://stackoverflow.com/questions/5102878/where-is-the-documentation-for-the-google-suggest-api
API:🔗✈️ https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=Hello

@SEARCH_Word: youtube search suggestions API USE THIS FOR PROJECT 
REF: https://stackoverflow.com/questions/11275365/youtube-api-search-auto-complete
API:🔗✈️http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query


0------------------------NEW------------------------0

@TITLE:BUILDING SEARCH FUNCTIONALITY 
@LOCATION: 🗃️HEADER.JS 
@HINT:FROM useEffect TO TILL TOGGLE BETWEEN PORTION 


  #TASK: 
       -Make an API Call after ever key press
       -But if the Diff Betn 2 API Calls is less than >200ms(Consider 2 sec(2000) for more understanding) Then Decline The API Call
       -In order to perform this we must aware of compoundWillMount(); that mean return by the term it meand restart app one more time from scratch  
       -This concept know as DEBOUNCING 
       LET's Understand 


        * if PRESS KEY - i ]
        *   -Render The component
        *   -useEffect() Call
        *   -Then start timer _> Make API Call after 200ms
        * 
        * 
        * key - What if i press one more key 
        * key - ip ]
        *   -Destroy the component & call clearTimeout
        *   -Re-Render The component
        *   -useEffect() Call
        *   -Then again start timer _> Make API Call after 200ms But this time it is New Timer totally new 
        * 
        * set
        * 
        * PROCESS know as Reconcialation 
        * 
        *      
        ----------------NEW FEAT
         
        0)
        LET'S WORK ON REDUX TO BUILD SEARCH FUNCTIONALITY WHILE NOT REPEAT SAME API REGAIN 
        
        E.g IF I Write "iphon max pro" It make API Call on each word According to But IF Want to back from" pro" by using Backslash So it should not Make API call that is task!! LIKE youtube 

        -🎯Whenever I'm searching I'll make cache inside my redux like a store 
        -🎯by mean it'll store search result inside my redux store 
        -🎯Not search for same work one it make it 
        -🎯Now it's time to store so first create 🗃️searchSlice.js;
        -🎯Go on 🗃️searchSlice;
        

        1)From 🗃️searchSlice.js 
        @IMP:POINTS & OVERVIEW 
        /
/*
 * Ok What is my initialState Now it's time to create Cache for DSA Plays very vital role TC & SC complexity
 * Cache
 * ?Time complexity to search in Array should be  = O(n) it mean you'v to do linear search one by one one to check for all(loop)
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
 *   
 * 
 *  
2)Existing file 
 -😵initialState it suppose to empty Object as per querry bcz search should be empty at initial 
-🎯then pass reducers inside into it pass state & action
-🎯 if my 'state' is an empty Object then what'll i pass Let me first demo what would i sent into querry first of all 
-🎯we'll send via Object LIKE {"ip"(key string): ["iphone","iphone11","iphone13"] all are "searchResult"}
-🎯key string mean what you type & searchResult mean that API Provide .... while searching 
-🎯So how this I would add it over here ... this same thing 
-🎯Now above in real this BELOW one 
state = { ...state},...action.payload; This is basically merge the payload as well as my state 
-🎯put this searchSlice into store
Go 🗃️store.js 
@Note: we muted the state this is how redux is work


4) FROM: 🗃️HEADER.js 
   @BETWEEN_LINE: 17 to 50 
   @ABOUT: useEffect & getSearchSuggestion() to get rid of not repeting API 
    -🎯As we see above we'r making an API Call via getSearchSuggestion()  
  -🎯there in API we need pass searchQuery and API suggesation as per stored value inside redux tool kit  
  -🎯Need to pass logic as a Cache(did redux) itself Let's try 
  -🎯By the term logic means use if else 
  -🎯if it is present in my cache/searchCache/redux store Then directly setSuggestion(json[1]) or else make an API call and setSuggestion
  -conclude If it is present in my cache/searchCache(redux store) don't make an Api call(TA:getSearchSuggestion()) just directly set my data from redux/cache store what we build it;
  -🎯Now it's time to create cache/searchCache How will get access to this cache/searchCache(redux store) by subscribing to it!! see code above useEffect by mean we'r reading data 
  -🎯store.search it will give you empty Object what we mentioned in 🗃️searchSlice.js see initialState:{}
  -🎯Now we'r gonna'v searchCache(cache/searchCache:combo of searchkey({empty})+APISuggestion) over ther with empty Object
  -🎯Let's If searchQuery present in my searchCache(cache/searchCache) How'll i find that 

  Our cache/searchCache Look something like this combo of searchkey({empty})+API suggesation

  --------------------👨‍💻
  #CODE:
  searchCache = 
  {
    "ipho":["iphone11","iphone13","iphone14"]
  }
  searchQuery = ipho

  😵@NOTE: I'm trying to findOut searchCache Of searchQuery & what will it return i'll setSuggestion(my) & i'll setSuggestion with searchCache of searchQuery by mean "ipho":["iphone11","iphone13","iphone14"]
  😵@NOTE:searchQuery:"ipho" setSuggestion:["iphone11","iphone13","iphone14"] that we'r manually set(setSuggestion) it searchCache of searchQuery

  --------------------👨‍💻
  
  So,How'll i search if "ipho" is present in my searchCache/cache/redux stor or not how'll i present
  -🎯Logic of if and else in useEffect
  -🎯If my searchCache of[] is searchQuery present in genral searchCache[searchQuery] then just return the searchCache of[searchQuery] "@"[] consider this Of
  in genral searchCache[searchQuery]; directly set this value 

  What if If not present(search KEY) in my cache/searchCache/redux ?? what should i do i should make an API Call and Upadat it my cache How will Upadat it Go getSearchSuggestion = async() SECTION & Upadat it HoW YOu do that Just dispatch an action It is as simple as that😍 & 
  -🎯what will i send in my cacheResult inside it  
  -🎯send an Object of it ensure that not json
  -🎯Object comes with key & value pair 
  -🎯Key Always send in [...] inside it


  ---------------NEW 

  @TITLE:LET'S BUILD COMMENT SECTION
  @COMMENT_TYPE: N LEVEL NEASTED COMMENT, 2 LEVEL NEASTED(MEAN->A SECTION OF COMMENT & 2ND ONE REPLY)

  @NOTE:NOW,WE'R GOING TO BUILD N LEVEL NEASTED COMMENT IT'S ONE OF THE IMPORTANT INTERVIEW QUESTION 
  -It mean It can go up to Many Leval 
  -continuous flow COMMENT till it end 
  

  E.g of N NEASTED COMMENT 
  @LOCATION:🗃️CommentContainer.js 

  // Befoure 
  const CommentList = ({ comments }) => {
   For the time being use Index As key
  return comments.map((comment, i) => (
    <div>
      /* MAIN COMMENT 
      <Comment key={i} data={comment} />
      /* EACH COMMENT LIST OF COMMENT(CHILDREN) 
      <div className='pl-10 border border-l-black ml-5'>
        <Comment key={i} data={comment} />
        <Comment key={i} data={comment} />
        <Comment key={i} data={comment} />
      </div>
    </div>
  ));
};

HERE YOU'V FOUND MAIN COMMENT & EVERY COMMENTS HAS IT'S OWN REPLY COMMENT BUT(LIST OF CHILDREN) BUT WHAT'R THE RPLAY AT THE END OF THE DAY THIS REPLY IS AGAIN "LIST OF COMMENT" ONECE AGAIN SO CAN I CALLED THIS "CommentList" ONECE AGAIN INSTEAD ABOVE CODE SEE WE 4 TIME CALL COMMENT WITH OF THEM ONE IS MAIN & OTHER IS CHILDREN
-IT'S IS KNOW AS RECURSION COMES UNDER HOOD OF DSA CALLING SAME COMPONENT INSIDE 
-USE SPECIFICALLY FOR REPLY'S
-WHAT SHOULD WE PASS INSIDE <CommentList/> SHOULD PASS REPLY'S 

Now,
const CommentList = ({ comments }) => {
 For the time being use Index As key
  return comments.map((comment, i) => (
    <div>
      {/* MAIN COMMENT *
      <Comment key={i} data={comment} />
      {/*EACH COMMENT LIST OF COMMENT(CHILDREN) 
      <div className='pl-10 border border-l-black ml-5'>
        <CommentList comments={comment.replies}/>
      </div>
    </div>
  ));
};



--------------------------NEW 

@TITLE: BUILD A LIVE STREMING CHAT 
@LOCATION: 🗃️WatchPage.js to 🗃️LiveChatting.js & 🗃️LiveComments
@OVERVIEW:
@NOTE: LIVE CHAT >> INFINITE SEARCH >> PAGINATION(>> Greter than)
-Q) How this Live chat poping Up ?
    How It is load new comment Quickly ?
    -There Live Data is involved those Application 
    -Kind of Streming,Live chat type of app 
    -@Note:It's keep changing Rugularly even without Refresing Page e.g treading app, Zerodha, crickbuzz,Live Commentry
    -Need to continuous keep on fetching Data here 
    -KEEP A NOTE AND PAPER BELOW ONE IS THEORY 
    
    @CHALLEGES:
    What are CHALLEGES we Face Here ??
    -Get Data LIVE 
     (By the term it mean The Application Which involved near real time Live Data)
    -Update The UI Data In efficient Way That Ensure that page should not Freezh 

    @PREREQUISITS 
    -Make sure Our Page shouldn't Freezh How much Data it is !!
    -Need to Mangage Data Layer & UI Layer 
    
    @HANDLE_DATA_OF_THIS_APPLICATION
    -DATA (LIVE)
     (TWO Way to Handle Data)
      - WEB SOCKETS CONECTION 
      What Does that ?
      # Web SOCKETS is Two Way Connection Established it's kind of Like a HandShake Between the server & UI(Backend & Fronted)
      # Once Done Passing Data To server is very Easy it is done through Events
      # Ensure that initial setup conn takes time 
    # what Happend Between Procedure two of ther Onece it is handShake/conn from UI TO Server Now you've preveledged You can Quickly send Data From Either Side(Able to send data from Both side reversible)
    # It is Know as By Directional(Two Directional) Live Data  
    # No Interval (Regular) mean The data come anytime & send it anywhere 
    #🔻 E.g Zerodha,treading App,what's app @Note:graph related querry 
    # LIVE STREMING APPLIACATION AlWAYS USE WEB SOCKETS & NEED TO MAINTAIN ORDER AlWAYS I'ts MOST IMPORTANT

    - API/LONG POLLING CONNECTION 
    What Does Mean ? 
    # UI Request to Server here 
    # It is One Directional(Unidirectional)
    # Interval Found here ... 
    # It cheks data after every sec Between Two one whether the data is coming or NOT 
    #🔻 Gmail & Crickbuzz is great e.g of API POLLING Doesn't want instant Result it's comes after loading(reload) or after some time it's not keep on coming because of Interval
    $# LIVE Chat also demand API POLLING IT is totally depend on user behaviour or Let's user takes 3 min to put comment The Api is supposed to call after 3 min If bowler Takes 4 min to finshed the Api would call afte 4 min ! 


    Q) But Why this page is not Freezing after making bunch of Api ?
    What Quickly Does it Youtube behind the since talk about LIVE CHAT API Ones it reach at Top/or it's fix/certain no. whaterver it is It will deleted it is smart technique.
    -it keeps change According to browser keeps on updating the Item To make user interfase Good & well
    -it does make UX better 
     
*/
