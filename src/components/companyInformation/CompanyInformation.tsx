import React, { useState, useRef } from "react";
// @ts-ignore
import homeVideo from "../../video/homeVideo.mp4";
import "../../ui/section.css";
import "../../ui/container.css";
import "./CompanyInformation.css";
import { PlayButton } from "../../image/svg/PlayButton";

export const CompanyInformation = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
    if (videoRef.current) {
      if (!videoPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="compInfo-title">We are Createx Construction Bureau </h2>
        <p className="compInfo-text">
          We are rightfully considered to be the best construction company in
          the USA.
        </p>
        <div className="compInfo-video--container">
          <video className="compInfo-video" controls muted loop ref={videoRef}>
            <source src={homeVideo} type="video/mp4" />
          </video>
          {!videoPlaying && (
            <div className="video-overlay" onClick={toggleVideo}>
              <button className="play-button">
                <PlayButton />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
