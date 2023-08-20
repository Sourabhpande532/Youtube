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






-------------------------------SECTION-------------------------------
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
*/
