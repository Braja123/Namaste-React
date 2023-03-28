// import { useContext } from "react";
import { Link } from "react-router-dom";
import { IMG_CDN } from "../constants";
// import UserContext from "../utils/UserContext";


const RestaurantCard = ({cloudinaryImageId, name, cuisines, id}) => {
  // const {cloudinaryImageId, name, cuisines} = restaurant.data;
  // const {user} = useContext(UserContext);
  return (
    <>
    <Link to={"/restaurant/" + id}>
      <div className="card">
        <img src={IMG_CDN + cloudinaryImageId} alt="pizza" />
        <h3>Name: {name}</h3>
        <h4>Cuisenes: {cuisines}</h4>
        {/* <h5>User: {user.name}</h5>
        <h5>User: {user.email}</h5> */}
      </div>
      </Link>
    </>
  )
}

export default RestaurantCard;