import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    console.log("Test");
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("json", json);
    setVideos(json.items);
  };

  return (
    <div class="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard info={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
