import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  // useEffect(() => {
  //    getVideo();
  // });

  // const getVideo = async () => {
  //   const video = await fetch(
  //     "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyClF1qUUsS0kNkLA26-z76Vnh-9CJnnkJ8&id=Yb3k9Z58ITc"
  //   );
  //   const data = await video.json();
  //   console.log("video data", data);
  // };

  return (
    <div className="mx-28 my-5">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
