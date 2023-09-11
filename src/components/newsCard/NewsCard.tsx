import { NavLink } from "react-router-dom";
import { Comments } from "../../image/svg/Comments";
import "./NewsCard.css";
import { toast } from "react-toastify";
import { selectNewsById } from "../../redux/newsSlice";
import { useSelector } from "react-redux";

interface Comment {
  name: string;
  email: string;
  DateComent: string;
  reply: string;
  textComent: string;
}

interface NewsData {
  id: string;
  textComent: Comment[];
}

interface Props {
  foto: string;
  nameNews: string;
  category: string;
  date: string;
  comments: string;
  cardNoraml?: boolean;
  cardPage?: boolean;
  id: string;
  cardHome?: boolean;
}

export const NewsCard = ({
  foto,
  nameNews,
  category,
  date,
  comments,
  id,
  cardNoraml = true,
  cardPage = false,
  cardHome = false,
}: Props) => {
  const newsInfo = useSelector((state) => selectNewsById(state, id));
  if (!newsInfo) {
    return <div>{toast.error("Project not found")}</div>;
  }

  const info: NewsData = newsInfo;

  const quantityComments = Object.keys(info.textComent).length;

  return (
    <div
      className={
        (cardHome ? "newsCard__wrapper--home " : "") +
        (cardPage
          ? "newsCard__wrapperList-newsCategory"
          : cardNoraml
          ? "newsCard__wrapper"
          : "newsCard__wrapper--small")
      }
    >
      <img
        src={foto}
        alt="foto news"
        className={
          cardPage
            ? "newsCard__img--newsCategory"
            : cardNoraml
            ? "newsCard__img"
            : "newsCard__img--small"
        }
      />
      <div
        className={
          cardNoraml ? "newsCard__conteiner" : "newsCard__conteiner--small"
        }
      >
        <h2 className="newsCard__title">
          <NavLink
            to={`/News/${id}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            {nameNews}
          </NavLink>
        </h2>
        <div className="newsCard__wrapper--infoBlock">
          <NavLink className="newsCard__category" to="/News">
            {category}
          </NavLink>
          <time className="newsCard__date" dateTime="">
            {date}
          </time>
          <Comments />
          <span className="newsCard__comments">
            {quantityComments === 0 ? "no" : quantityComments} comments
          </span>
        </div>
        {cardNoraml ? (
          <p className="newsCard__text">
            Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas
            faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer
            bibendum turpis convallis enim, nibh convallis...
          </p>
        ) : null}
      </div>
    </div>
  );
};
