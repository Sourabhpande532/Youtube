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

        *  */
