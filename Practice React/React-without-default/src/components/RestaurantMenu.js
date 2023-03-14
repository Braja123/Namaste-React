import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN } from '../constants';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {
  const {id} = useParams();

  const res = useRestaurant(id);

  if(!res) return null;

  return (
    <div>
      <h1>RestaurantMenu: {id}</h1>
      <img src={IMG_CDN + res.cloudinaryImageId} alt="res-image" />
      <h4>{res.area}</h4>
      <div>
        <h1>Menu</h1>
        <ul>
        {Object.values(res?.menu?.items).map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
        </div>
    </div>
  )
}

export default RestaurantMenu