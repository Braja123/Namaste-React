import { useState, useEffect, useContext } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
// import UserContext from "../utils/UserContext";
// import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  // const {user, setUser} = useContext(UserContext);
  // const { user, setUser } = useContext(UserContext);
  // const { user, setUser } = useContext(UserContext);

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

  if (!allRestaurants) return null;
  // if(filterRestaurants?.length === 0) return <h2>No matching Restaurants</h2>;

  let status = useOnline();

  if (!status) return <h1>🍄Offline, please check your internet connection</h1>;

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
            let data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {/* <input
        type="text"
        value={user.name}
        onChange={(e) =>
          setUser( {...user, name: e.target.value })
        }
      />
      <input
        type="text"
        value={user.email}
        onChange={(e) =>
          setUser({...user, email: e.target.value })
        }
      />  */}

      <h2>{searchClicked}</h2>
      <div className="res-card">
        {filterRestaurants?.length === 0 ? (
          <h2>No matching Restaurants</h2>
        ) : (
          filterRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
