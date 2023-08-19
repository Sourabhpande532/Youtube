import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  /* 
  -First thing to note wherever i'll give appRouter my app will render over there or Act According as exact you want!
  -if my path is "/" slash my Body will be render below <Head/> as i shoot appRouter overThere;
  -@Childern: it goes wherever My OUTLET exits
  -Now the path is "/"(slash) what children should be render in my Outlet see in Childern [...] i.e nothing but is <MainContainer/>

  -What should I render here is it App.js or other on click
  -For that need to create partial route what should on my App(UI)  
  -As I click on App(Body-Video Cart) should my sidebar & header changes or Remain Same obivious Remain Same
  -Only {Body} VideoCard Get changes Have you NOTICE(While going to "/watchPage") 
  -For those Portion Need to work Only i.e mention Body in appRouter when my slash is "/";
  -Which components you want to change over there need to mention <RouterProvider router={appRouter}/>
  -Now body has Childern overIt did you see <Sidebar/> and <MainContainer/>
  -So As per Task Or Route my <MainContainer/> should be Replace with <WatchPage/> either we want both of them At a time"/WatchPage" so in order to do that we Need to mention OUTLET from React router dom 
  -GIVEN Fact of Childern is wherever you mention Outlet it shoot or change

  Q)How will I configured what'll be the render inside my Outlet!
  ->
  */

  return (
    <Provider store={store}>
      <div className=''>
        <Header />
        <RouterProvider router={appRouter} />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
