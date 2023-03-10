import { useContext } from "react";
import UserContext from "../util/UserContext";
import { IMG_CDN_URL } from "./constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravel,
}) => {
  // const {name, cuisines, cloudinaryImageId, lastMileTravel} = restaurant.data;
  
  const {user} = useContext(UserContext);

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
        alt="ice-cream"
      />
      <h2 className="font-bold text-2xl">{name}</h2>
      <h3>{cuisines}</h3>
      <h2>{lastMileTravel} Minutes</h2>
      <h3 className="font-bold">{user.name} - {user.email}</h3>
    </div>
  );
};

export default RestaurantCard;