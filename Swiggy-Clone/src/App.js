import React, { lazy, Suspense, useState } from "react";

import UserContext from "./util/UserContext";
import { Provider } from "react-redux";
import store from "./store/store";

import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("../src/components/Instamart"));

/*
Header
  - Logo
  - Nav Items(Right Side)
  - Cart
Body
  - Search Bar
  - RestaurantList
    - Restaurant card(many cards)
      - Image
      - Name
      - Rating
      - Cusines
  Footer
    - Links
    - CopyRights
*/

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Gopal Das",
    email: "gopal@gmail.com",
  });

  return (
    <Provider store={store}>
      {/* Provider is used to modify the context */}
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
// const styleObj = {
//   backgroundColor: "red"
// }
// const jsx = (
//   <div style={styleObj}>
//     <h4>JSX</h4>
//     <h4>Second JSX</h4>
//   </div>)

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        // children: [{
        //   path: 'profile',
        //   element: <Profile />
        // }]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
