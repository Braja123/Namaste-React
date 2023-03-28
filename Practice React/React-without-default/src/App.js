import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { Shimmer } from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "./store/store";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Gopal Das",
    email: "gopal@gmail.com"
  })
  return (
    <Provider store={store}>
    <UserContext.Provider value={{user, setUser: setUser}}>
      <HeaderComponent />
      {/* filled with other components */}
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {   
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {   
        path: '/',
        element: <Body user={{
          name: "Gopal Das",
          email: "gopal@gmail.com"
        }} />
      },
      {   
        path: 'about',
        element: <Suspense fallback={<Shimmer />}><About /></Suspense>,
        children: [
          {
            path: 'profile',
            element: <Profile />
          }
        ]
      },
      {   
        path: '/contact',
        element: <Contact />
      },
      {   
        path: '/instamart',
        element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
      },
      {   
        path: '/restaurant/:id',
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ] 
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


{/**
       * Header
       *  - Logo
       *  - Navbar
       *  - Cart
       * Body
       *  - Search
       *  - RestaurantList
       *    - Restaurants Card
       *        - Images
       *        - Descriptions
       * Footer
       *
       *
       */}