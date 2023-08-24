import { useState } from "react";
import "./CardWork.css";
import { useNavigate } from "react-router-dom";

interface Props {
  backgroundImage: string;
  title: string;
  text: string;
  id: string;
}

export const CardWork = ({ backgroundImage, title, text, id }: Props) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

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
        <button
          onClick={() => {
            navigate(`/Work/${id}`);
            window.scrollTo(0, 0);
          }}
          className="workCard__button"
        >
          View Project
        </button>
      </div>
    </div>
  );
};
