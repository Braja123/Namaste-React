import React, {lazy, Suspense} from "react";
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
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      {/* filled with other components */}
      <Outlet />
      <Footer />
    </>
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
        element: <Body />
      },
      {   
        path: 'about',
        element: <Suspense><About fallback={<Shimmer />}/></Suspense>,
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