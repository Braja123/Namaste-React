import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";








const AppLayout = () => {
  return (
    <>
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
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
