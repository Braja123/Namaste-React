import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../constants/http";

import { hideSidebar } from "../store/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  // when we have normal "/:id" there we use "useParams()"
  // But when we have "queryStrings" there we need to use "useSearchParams()"
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  const getSingleVideo = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API + searchParams.get("v"));
    const json = await res.json();
    console.log();
  };

  useEffect(() => {
    getSingleVideo();
  }, []);

  useEffect(() => {
    dispatch(hideSidebar());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex">
        <div>
          <iframe
            width="900"
            height="600"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
      {/* name and title of the videos */}
    </div>
  );
};

export default WatchPage;
