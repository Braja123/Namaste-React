import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  // Always subscribe specific portion to your app
  const cartItems = useSelector((store) => store.cart.items);

  // if you will use like this major optimization issue will come
  // Because whenwe change anything the whole store will re-render again and again because we used store inside the JSX.
  // const store = useSelector(store => store);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button className="bg-green-100 p-2 m-5" onClick={() => handleClearCart()}>Clear Cart</button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
