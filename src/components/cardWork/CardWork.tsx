import { useState } from "react";
import "./CardWork.css";

interface Props {
  backgroundImage: string;
  title: string;
  text: string;
}

export const CardWork = ({ backgroundImage, title, text }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`workCard ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="cardImage"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="workCard__wrapper--textGroup">
        <h2 className="workCard__title">{title}</h2>
        <p className="workCard__text">{text}</p>
        <button className="workCard__button">View Project</button>
      </div>
    </div>
  );
};
