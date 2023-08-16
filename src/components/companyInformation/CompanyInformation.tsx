import React, { useState, useRef } from "react";
// @ts-ignore
import homeVideo from "../../video/homeVideo.mp4";
import "../../ui/section.css";
import "../../ui/container.css";
import "./CompanyInformation.css";
import { PlayButton } from "../../image/svg/PlayButton";
import { LikeRed } from "../../image/svg/LikeRed";
import { Hand } from "../../image/svg/Hand";
import { Slippers } from "../../image/svg/Slippers";

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
        <h2 className="compInfo-title">Our core values</h2>
        <p className="compInfo-text">
          Our mission is to set the highest standards for construction sphere.
        </p>
        <ul className="compInfo__list">
          <li className="compInfo__item">
            <LikeRed />
            <h3 className="compInfo__values--title">Quality</h3>
            <p className="compInfo__values--text">
              Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
              velit nostrud aliquip sunt.
            </p>
          </li>
          <li className="compInfo__item">
            <Hand />
            <h3 className="compInfo__values--title">Safety</h3>
            <p className="compInfo__values--text">
              Anim reprehenderit sint voluptate exercitation adipisicing laborum
              adipisicing. Minim empor est ea.
            </p>
          </li>
          <li className="compInfo__item">
            <Slippers />
            <h3 className="compInfo__values--title">Comfort</h3>
            <p className="compInfo__values--text">
              Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
              voluptate ullamco proident ea ad.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
