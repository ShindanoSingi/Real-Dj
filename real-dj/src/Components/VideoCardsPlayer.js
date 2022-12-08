import Wait from "./Wait";
import React from "react";
import { Link } from "react-router-dom";
import './VideoCardsPlayer.css'


// This component receives two objects: videoId has thumbnails and and videoIds..., and videos has statics information like views count, likes, dislikes...
const VideoCards = ({ videos, viewsFunc }) => {
  // console.log(videos)

  // { videoId, videos, videoStat, likes, views}

  // console.log(videos);

  // if (videos[0] === undefined) {
  // console.log('No videos');
  // }

  return videos.length < 1 ? (
    <Wait />
  ) : (
    <div className="cards-container ">
      {videos.map(
        (video, index) =>
          video.type === "video" && (
            <Link
              key={index + 1}
              className="link"
              to={`/videoPlayer/${video.id}`}
            >
              <div
                class="single-card"
                key={index}
              >
                <div class="">
                  <img
                    className="video-thumbnail "
                    src={video.thumbnail.url}
                    alt=""
                    onClick={() => {
                      document.getElementsByTagName(
                        "iframe"
                      )[0].src = `https://www.youtube.com/watch_popup?v=${video.channel.id}`;
                    }}
                  />
                  <div className="">
                    <p className="">
                      {video.title.charAt(0).toUpperCase() +
                        video.title.substring(1, 40).toLowerCase() +
                        "..."}{" "}
                    </p>

                    <div className="">
                      <div className="channel">
                        <img
                          class="channel-avatar"
                          src={video.channel.icon}
                          alt=""
                        />
                        <p class="channel-name">
                          {video.channel.name.substring(0, 10) + "..."}{" "}
                        </p>
                      </div>

                      <a
                        className="channel-id-player"
                        href={`https://www.youtube.com/channel/${video.channel.id}`}
                        target="_blabk"
                      ></a>
                      <ul class="views-uploaded-duration">
                        <li class="views">
                          Views: {viewsFunc(video.views)}{" "}
                        </li>
                        <li class="uploaded">
                          Posted: {video.uploadedAt}{" "}
                        </li>
                        <li class="duration">
                          Duration: {video.duration_formatted}{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
      )}{" "}
    </div>
  );
};
export default VideoCards;
