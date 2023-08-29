import { Facebook } from "../../../image/svg/Facebook";
import { LikeRed } from "../../../image/svg/LikeRed";
import { Twitter } from "../../../image/svg/Twitter";
import "./TeamCard.css";

interface Props {
  image: string;
  alt: string;
  name: string;
  position: string;
}

export const TeamCard = ({ image, alt, name, position }: Props) => {
  return (
    <div className="teamCard-wrapper">
      <div className="teamCard--wrapper__img">
        <img className="teamCard-img" src={image} alt={alt} />
        <div>
          <LikeRed />
          <Twitter />
          <Facebook />
        </div>
      </div>
      <div>
        <h3 className="teamCard-title">{name}</h3>
        <p className="teamCard-text">{position}</p>
      </div>
    </div>
  );
};
