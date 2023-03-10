import React from "react";
import { useParams } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  // convert to millio, thousand
  function test(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? Math.abs(Number(labelValue)) / 1.0e9 + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? Math.abs(Number(labelValue)) / 1.0e6 + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? Math.abs(Number(labelValue)) / 1.0e3 + "K"
      : Math.abs(Number(labelValue));
  }

  return (
    <>
      <div className="p-2 m-2 w-[305px] h-72 shadow-lg">
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails?.medium?.url}
        />
        <ul>
          <li className="font-bold py-2">
            {title.length <= 60 ? title : title.slice(0, 60) + "..."}
          </li>
          <li className="text-sm">{channelTitle}</li>
          <li className="text-sm">{test(statistics?.viewCount)} views</li>
        </ul>
      </div>
    </>
  );
};

export const AdVideoCard = ({info}) => {
  return (
    <div className="p-1 m-1 border border-red-300">
      <VideoCard info={info} /> 
    </div>
  )
}

export default VideoCard;
