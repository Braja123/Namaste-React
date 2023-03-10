import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";

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

const Title = () => (
  <a href="/">
    <img 
      className="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="food-villa" />
  </a>
)

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const kwalityWalls = {
  name: "Kwality Walls",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/guoy8yclwoqjglmmm5ml",
  cuisnes: ['Data', 'san'],
  stars: "4.3"
}

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={kwalityWalls.image} alt="ice-cream" />
      <h2>{kwalityWalls.name}</h2>
      <h3>{kwalityWalls.cuisnes.join(",")}</h3>
      <h2>{kwalityWalls.stars} Stars</h2>
    </div>
  )
}

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
    // <h4>Body</h4>
  )
}
const Footer = () => {
  return (
    <h4>Footer</h4>
  )
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}
// const styleObj = {
//   backgroundColor: "red"
// }
// const jsx = (
//   <div style={styleObj}>
//     <h4>JSX</h4>
//     <h4>Second JSX</h4>
//   </div>)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)