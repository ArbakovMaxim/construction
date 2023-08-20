import "./FooterSocialBlock.css";
import { Whatsapp } from "../../../image/svg/Whatsapp";
import { Messanger } from "../../../image/svg/Messanger";
import { Facebook } from "../../../image/svg/Facebook";
import { Twitter } from "../../../image/svg/Twitter";
import { YouTube } from "../../../image/svg/YouTube";
import { useState } from "react";

export const FooterSocialBlock = () => {
  const [isHoveredWhatsapp, setIsHoveredWhatsapp] = useState(false);
  const [isHoveredMessanger, setIsHoveredMessanger] = useState(false);
  const [isHoveredFacebook, setIsHoveredFacebook] = useState(false);
  const [isHoveredTwitter, setIsHoveredTwitter] = useState(false);
  const [isHoveredYouTube, setIsHoveredYouTube] = useState(false);

  //Whatsapp
  const handleMouseEnterWhatsapp = () => {
    setIsHoveredWhatsapp(true);
  };
  const handleMouseLeaveWhatsapp = () => {
    setIsHoveredWhatsapp(false);
  };

  //Messanger
  const handleMouseEnterMessanger = () => {
    setIsHoveredMessanger(true);
  };

  const handleMouseLeaveMessanger = () => {
    setIsHoveredMessanger(false);
  };

  //Facebook
  const handleMouseEnterFacebook = () => {
    setIsHoveredFacebook(true);
  };

  const handleMouseLeaveFacebook = () => {
    setIsHoveredFacebook(false);
  };

  //Twitter
  const handleMouseEnterTwitter = () => {
    setIsHoveredTwitter(true);
  };

  const handleMouseLeaveTwitter = () => {
    setIsHoveredTwitter(false);
  };

  //YouTube
  const handleMouseEnterYouTube = () => {
    setIsHoveredYouTube(true);
  };

  const handleMouseLeaveYouTube = () => {
    setIsHoveredYouTube(false);
  };

  return (
    <div className="footer__wrapper--socialBlock">
      <a
        href="https://web.whatsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        onMouseEnter={handleMouseEnterWhatsapp}
        onMouseLeave={handleMouseLeaveWhatsapp}
      >
        <Whatsapp opacity={isHoveredWhatsapp ? "1" : "0.6"} />
      </a>

      <a
        href="https://www.messenger.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        onMouseEnter={handleMouseEnterMessanger}
        onMouseLeave={handleMouseLeaveMessanger}
      >
        <Messanger
          color={isHoveredMessanger ? "#0084FF" : "#fff"}
          opacity={isHoveredMessanger ? "1" : "0.6"}
        />
      </a>

      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        onMouseEnter={handleMouseEnterFacebook}
        onMouseLeave={handleMouseLeaveFacebook}
      >
        <Facebook opacity={isHoveredFacebook ? "1" : "0.6"} />
      </a>

      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        onMouseEnter={handleMouseEnterTwitter}
        onMouseLeave={handleMouseLeaveTwitter}
      >
        <Twitter opacity={isHoveredTwitter ? "1" : "0.6"} />
      </a>

      <a
        href="https://www.youTube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        onMouseEnter={handleMouseEnterYouTube}
        onMouseLeave={handleMouseLeaveYouTube}
      >
        <YouTube
          color={isHoveredYouTube ? "#FF0000" : "#fff"}
          opacity={isHoveredYouTube ? "1" : "0.6"}
        />
      </a>
    </div>
  );
};
