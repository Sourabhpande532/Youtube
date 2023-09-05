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
