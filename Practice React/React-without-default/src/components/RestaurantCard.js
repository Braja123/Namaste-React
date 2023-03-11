import { IMG_CDN } from "../constants";


const RestaurantCard = ({cloudinaryImageId, name, cuisines}) => {
  // const {cloudinaryImageId, name, cuisines} = restaurant.data;
  return (
    <>
      <div className="card">
        <img src={IMG_CDN + cloudinaryImageId} alt="pizza" />
        <h3>Name: {name}</h3>
        <h4>Cuisenes: {cuisines}</h4>
      </div>
    </>
  )
}

export default RestaurantCard;