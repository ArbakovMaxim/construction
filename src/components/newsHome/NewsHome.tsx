import "../../ui/container.css";
import { NewsCard } from "../newsCard/NewsCard";
import { NavLink } from "react-router-dom";
import "./NewsHome.css";
import { useResize } from "../../hook/useResize";
import news1 from "../../image/news1.png";
import news2 from "../../image/news2.png";
import news3 from "../../image/news3.png";

export const NewsHome = () => {
  const { isScreenXxxl } = useResize();
  return (
    <section className="newsHome__section">
      <div className="container">
        <h1 className="newsHome__title">Recent news</h1>
        <div className="newsHome__wrapperCard">
          <NewsCard
            id="1"
            foto={news1}
            nameNews="How to Build Climate Change-Resilient Infrastructure"
            category="Industry News"
            date="June 24, 2020"
            cardHome={true}
            comments="4"
          />
          <div className="newsHome__wrapperCard--small">
            <NewsCard
              id="2"
              foto={news2}
              nameNews="How Construction Can Help Itself"
              category="Innovation"
              date="June 12, 2020"
              comments="No"
              cardHome={true}
              cardNoraml={isScreenXxxl ? false : true}
            />
            <NewsCard
              id="3"
              foto={news3}
              nameNews="Types of Flooring Materials"
              category="Company News"
              date="December 1, 2019"
              comments="No"
              cardHome={true}
              cardNoraml={isScreenXxxl ? false : true}
            />
          </div>
        </div>
        <div className="newsHome__footerSection--wrapper">
          <h2 className="newsHome__footerSection--title">
            Explore all our news posts
          </h2>
          <button className="newsHome__footerSection--button">
            <NavLink to="/">View all news</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};
