import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../components/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../util/useRestaurant";
import { useDispatch } from "react-redux";
import {addItem} from "../store/cartSlice";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("Mango"))
  }

  const addFoodItem = (item) => {
    dispatch(addItem(item))
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>RestaurantMenu id: {resId} </div>
      <div>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h2>{restaurant.area}</h2>
        <h2>{restaurant.city}</h2>
        <h2>{restaurant.avgRating} stars</h2>
      </div>
      <div>
      <button className="p-2 m-5 bg-green-100" onClick={() => handleAddItem()}>Add Item</button>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => {
            return <li key={item.id}>{item.name} - <button className="p-1 bg-green-50" onClick={() => addFoodItem(item)}>Add</button></li>;
          })}
        </ul>
      </div>
      {/* <div>{console.log(Object.values(restaurant?.menu?.items))}</div> */}
    </div>
  );
};

export default RestaurantMenu;
