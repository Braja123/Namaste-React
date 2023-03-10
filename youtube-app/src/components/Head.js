import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../constants/http";
import { cacheResults } from "../store/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  /**
   *
   * {
   *  "iphone": ["iphone 11", "iphone 12"]
   * }
   *
   */

  useEffect(() => {
    // make an api call after every key press
    // but if the difference between 2 API calls <200ms
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]); //searchCache[searchQuery] is the "value" of "searchQuery"
      } else {
        getSearchSuggestions();
      }
    }, 200);

    // decline the API call
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("inside ApI: " + searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // update cache
    dispatch(
      cacheResults({
        [searchQuery] : json[1]
        // "iphone": ["das", 'sanu']

      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="grid grid-flow-col p-5 m-2">
        <div className="flex col-span-1">
          <img
            className="h-8"
            src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
            alt="hamburger"
            onClick={() => toggleMenuHandler()}
          />
          <a href="/">
            <img
              className="h-8 mx-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
              alt="youtube"
            />
          </a>
        </div>
        <div className="col-span-10 px-10">
          <input
            className="w-1/2 border border-grey-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className="border border-grey-400 px-5 py-2 bg-grey-100 rounded-r-full">
            🔍
          </button>
          {showSuggestions && (
            <div className="fixed bg-white py-2 px-5 w-[500px] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestions.map((list) => (
                  <li key={list} className="py-2 hover:bg-gray-100">
                    🔍 {list}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <img
            className="h-8"
            src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
            alt="user-logo"
          />
        </div>
      </div>
    </>
  );
};

export default Head;
