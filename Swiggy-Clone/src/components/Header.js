import { useContext, useState } from "react";
import Logo from "../assets/img/download.png";
import { Link } from "react-router-dom";
import useOnline from "../util/useOnline";
import UserContext from "../util/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img className="h-28 p-3" src={Logo} alt="food-villa" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const isOnline = useOnline();

  const {user} = useContext(UserContext);

  // "useSelector" will directly get the store
  const cartItems = useSelector(store => store.cart.items );

  console.log(cartItems);

  return (
    <div className="flex justify-between bg-slate-500 shadow-lg sm:bg-pink-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2">Cart - {cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      {isOnline ? '😁' : '😔'}
      <span className="p-0 font-bold text-red-900 pt-5">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
