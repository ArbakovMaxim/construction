import "../../ui/container.css";
import { NewsCard } from "../newsCard/NewsCard";
import "./NewsHome.css";
import news1 from "../../image/news1.png";

export const NewsHome = () => {
  return (
    <section className="newsHome__section">
      <div className="container">
        <h1 className="newsHome__title">Recent news</h1>
        <div className="newsHome__wrapperCard">
          <NewsCard
            foto={news1}
            nameNews="How to Build Climate Change-Resilient Infrastructure"
            category="Industry News"
            date="June 24, 2020"
            comments="4"
          />
        </div>
      </div>
    </section>
  );
};
