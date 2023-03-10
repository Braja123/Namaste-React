import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "./constants";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../util/helper";
import useSwiggyApi from "../util/useSwiggyApi";
import useOnline from "../util/useOnline";
import UserContext from "../util/UserContext";

const Body = () => {
  const { user, setUser } = useContext(UserContext);

  // searchText is a local state variable
  const [searchText, setSearchText] = useState(); // returns [variableName, function to update the variable]

  const [allRestaurants, filteredRestaurants, setFilterRestaurants] =
    useSwiggyApi();

  const isOnline = useOnline();

  if (!isOnline) {
    return <h2>🦔🦔Offline, Please check your internet connection🦔🦔</h2>;
  }

  // Not render component (Early Return)
  if (!allRestaurants) return null;

  // if(filteredRestaurants?.length === 0) return <h1>No Restaurant match your filter</h1> ;

  // console.log("Render");

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          data-testid="search-input"
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-gray-400"
          data-testid="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>

      <div className="flex flex-wrap" data-testid="res-list">
        {/* {RestaurantCard(restaurantList[0])} */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
        {/* <RestaurantCard {...restaurantList[0].data} />  */}
        {/* <RestaurantCard restaurant={restaurantList[1].data} />
      <RestaurantCard restaurant={restaurantList[2].data} />
      <RestaurantCard restaurant={restaurantList[3].data} />
      <RestaurantCard restaurant={restaurantList[4]} />
      <RestaurantCard restaurant={restaurantList[0]} />
      <RestaurantCard restaurant={restaurantList[0]} /> */}
      </div>
    </>
  );
};

export default Body;
