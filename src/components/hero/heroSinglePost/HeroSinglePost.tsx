import "./HeroSinglePost.css";
import "../../../ui/container.css";
import "../../../ui/textStyled.css";
import { NavLink } from "react-router-dom";
import { Comments } from "../../../image/svg/Comments";
import News from "../../../util/News/AllNews.json";
import { toast } from "react-toastify";
import { Facebook } from "../../../image/svg/Facebook";
import { Twitter } from "../../../image/svg/Twitter";
import { LinkedIn } from "../../../image/svg/LinkedIn";

interface Props {
  ID: string | undefined;
}

interface NewsData {
  id: string;
  image: string;
  nameNews: string;
  category: string;
  date: string;
  comments: string;
  singleImage: string;
}

export const HeroSinglePost = ({ ID }: Props) => {
  const newsInfo = News.find((item) => item.id === ID);

  if (!newsInfo) {
    return <div>{toast.error("Project not found")}</div>;
  }

  const info: NewsData = newsInfo;

  return (
    <section className="heroSinglePost__section">
      <div className="container">
        <div className="heroSinglePost__wraper--content">
          <p className="hero__link--text">
            <NavLink className="hero__link" to="/">
              Homepage
            </NavLink>
            <span className="hero__link--span ">/</span>
            <NavLink className="hero__link" to="/News">
              News
            </NavLink>
            <span className="hero__link--span ">/</span>
            {info.nameNews}
          </p>
          <h1 className="heroSinglePost__title">{info.nameNews}</h1>

          <div className="heroSinglePost__wrapper--infoBlock">
            <div className="heroSinglePost__wrapper--date">
              <p className="heroSinglePost__category">{info.category}</p>
              <time className="heroSinglePost__date" dateTime="">
                {info.date}
              </time>
              <Comments />
              <span className="heroSinglePost__comments">
                {info.comments} comments
              </span>
            </div>

            <ul className="heroSinglePost__sicialBlock--list">
              <li className="heroSinglePost__sicialBlock--item">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="heroSinglePost__social--icon"
                >
                  <Facebook color="#787A80" opacity="1" />
                </a>
              </li>
              <li className="heroSinglePost__sicialBlock--item">
                <a
                  href="https://www.linkedin.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="heroSinglePost__social--icon"
                >
                  <LinkedIn width="24" height="24" color="#787A80" />
                </a>
              </li>
              <li className="heroSinglePost__sicialBlock--item">
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="heroSinglePost__social--icon"
                >
                  <Twitter color="#787A80" opacity="1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
