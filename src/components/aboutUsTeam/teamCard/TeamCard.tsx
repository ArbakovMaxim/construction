import { Facebook } from "../../../image/svg/Facebook";
import { LinkedIn } from "../../../image/svg/LinkedIn";
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
    <div className="teamCard__wrapper">
      <div className="teamCard--wrapper__img">
        <img className="teamCard__img" src={image} alt={alt} />
        <ul className="teamCard__social--icons">
          <li className="teamCard__item">
            <a
              href="https://www.linkedin.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </li>
          <li className="teamCard__item">
            <a
              href="https://twitter.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Twitter opacity="1" width="20" height="20" />
            </a>
          </li>
          <li className="teamCard__item">
            <a
              href="https://www.facebook.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook opacity="1" width="20" height="20" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="teamCard__title">{name}</h3>
        <p className="teamCard__text">{position}</p>
      </div>
    </div>
  );
};
