import React, {useEffect, useState} from 'react';

import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (id) => {

  const [res, setRes] = useState(null);

  useEffect(() => {
    getRestaurantinfo();
  }, []);

  const getRestaurantinfo = async () => {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    console.log(json.data);
    setRes(json.data);
  }

  return res;
}

export default useRestaurant;