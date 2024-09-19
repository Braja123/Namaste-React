import React from "react";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
    navigate("/");
  };
  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b flex justify-between from-black z-10">
        <img className="w-44" src={NETFLIX_LOGO} alt="netflix-logo" />
        {
          <div className="flex p-2">
            <img className="w-12 h-12" src={USER_AVATAR} alt="usericon" />
            <button onClick={handleSignout} className="font-bold text-white">
              Sign Out
            </button>
          </div>
        }
      </div>
    </>
  );
};

export default Header;
