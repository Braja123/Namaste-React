import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./store/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Memo from "./components/Memo";
import RefComponent from "./components/RefComponent";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "watch", element: <WatchPage /> },
      { path: "memo", element: <Memo /> },
      { path: "ref", element: <RefComponent /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

/**
 * Header
 *  Hamburger
 *  Search
 * Body
 *  Sidebar
 *    MenuItems
 *  MainComponent
 *    Buttons
 *    VideoContainer
 *      VideoCard
 *
 *
 *
 */
