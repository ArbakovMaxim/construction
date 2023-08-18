import { NavLink } from "react-router-dom";
import { Comments } from "../../image/svg/Comments";
import "./NewsCard.css";

interface Props {
  foto: string;
  nameNews: string;
  category: string;
  date: string;
  comments: string;
}

export const NewsCard = ({
  foto,
  nameNews,
  category,
  date,
  comments,
}: Props) => {
  return (
    <div className="newsCard__wrapper">
      <img src={foto} alt="foto news" className="newsCard__img" />
      <div className="newsCard__conteiner ">
        <h2 className="newsCard__title">
          <NavLink to="/">{nameNews}</NavLink>
        </h2>
        <div className="newsCard__wrapper--infoBlock">
          <NavLink className="newsCard__category" to="/">
            {category}
          </NavLink>
          <time className="newsCard__date" dateTime="">
            {date}
          </time>
          <Comments />
          <span className="newsCard__comments">{comments} comments</span>
        </div>
        <p className="newsCard__text">
          Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus.
          Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis
          convallis enim, nibh convallis...
        </p>
      </div>
    </div>
  );
};
