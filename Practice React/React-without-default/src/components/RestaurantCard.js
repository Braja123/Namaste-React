import { Link } from "react-router-dom";
import { IMG_CDN } from "../constants";


const RestaurantCard = ({cloudinaryImageId, name, cuisines, id}) => {
  // const {cloudinaryImageId, name, cuisines} = restaurant.data;
  return (
    <>
    <Link to={"/restaurant/" + id}>
      <div className="card">
        <img src={IMG_CDN + cloudinaryImageId} alt="pizza" />
        <h3>Name: {name}</h3>
        <h4>Cuisenes: {cuisines}</h4>
      </div>
      </Link>
    </>
  )
}

export default RestaurantCard;