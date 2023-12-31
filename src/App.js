import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Result from "./components/Result";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />,
        <Body />,
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "demo",
        element:<>
        <Demo />
        <Demo2/>
        </> ,
      },
    ],
  },
]);
/* 
--GO PT.JS SEE ^^
*/

function App() {
  return (
    <Provider store={store}>
      <div className=''>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
