import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("sanu");
  const [searchClicked, setSearchClicked] = useState("false");
  const [restaurants, setRestaurants] = useState(restaurantList);

  const filterData = () => {
    return restaurants.filter(item => item.data.name.toLowerCase().includes(searchText.toLowerCase()));
  }

  return (
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
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <h2>{searchClicked}</h2>
      <div className="res-card">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
