import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../constants/http";
import { Shimmer } from "../constants/Shimmer";
import VideoCard, { AdVideoCard } from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json?.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (videos.length === 0) return <Shimmer />;

  return (
    <div className="flex flex-wrap">
      {/* This is for HOC */}
      {videos[0] && <AdVideoCard info={videos[0]} />}

      {videos.map((video) => (
        <Link key={video.id} to={"watch/?v=" + video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
