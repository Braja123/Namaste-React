import React, { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../components/constants.JS";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(
      FETCH_MENU_URL + resId
    );
    const json = await data.json();
    // console.log(json.data);
    setRestaurant(json.data);
  };

  // return restaurant data
  return restaurant;
}

export default useRestaurant;