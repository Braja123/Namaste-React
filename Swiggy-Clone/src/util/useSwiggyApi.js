import { useState, useEffect } from "react";

const useSwiggyApi = () => {
  
  const [allRestaurants, setAllRestaurants] = useState([]);
  // const [restaurants, setRestaurants] = useState(restaurantList);
  const [filteredRestaurants, setFilterRestaurants] = useState([]);
  

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.439084&lng=78.447369&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json(); //convert to readable json object
    setAllRestaurants(res?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(res?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return [allRestaurants, filteredRestaurants, setFilterRestaurants];

}

export default useSwiggyApi;