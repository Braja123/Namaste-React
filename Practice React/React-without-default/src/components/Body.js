import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const filterData = () => {
    return allRestaurants.filter((item) =>
      item.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.439084&lng=78.447369&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    console.log(res);
    setFilterRestaurants(res?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(res?.data?.cards[2]?.data?.data?.cards);
  };

  if(!allRestaurants) return null;
  // if(filterRestaurants?.length === 0) return <h2>No matching Restaurants</h2>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            // filter data
            let data = filterData();
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <h2>{searchClicked}</h2>
      <div className="res-card">
        {filterRestaurants?.length === 0 ? <h2>No matching Restaurants</h2> : filterRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
