import { IMG_CDN_URL } from "./constants";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="ice-cream" />
      <h2 className="font-bold text-2xl">{name}</h2>
      <h2 className="text-md">{description}</h2>
      <h3>Rupees: {price}</h3>
    </div>
  );
};

export default FoodItem;
