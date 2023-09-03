import "./NewsCategories.css";
import "../../ui/container.css";
import AllNews from "../../util/News/AllNews.json";
import { useEffect, useState } from "react";
import { NewsCard } from "../newsCard/NewsCard";
import ReactPaginate from "react-paginate";
import { ArrowsLeft } from "../../image/svg/ArrowsLeft";
import { ArrowsRight } from "../../image/svg/ArrowsRight";

interface News {
  id: string;
  image: string;
  nameNews: string;
  category: string;
  date: string;
  comments: string;
}

export const NewsCategories = () => {
  const [activ, setActiv] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredNews, setFilteredNews] = useState<News[]>([]);
  const itemsPerPage = 6;

  //фильтрация по категориям
  useEffect(() => {
    const filtered = AllNews.filter((news: News) => {
      if (activ === "all") {
        return true;
      } else {
        return news.category === activ;
      }
    });
    setFilteredNews(filtered);
    setCurrentPage(0);
  }, [activ]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const displayNews = filteredNews
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    .map((news: News) => (
      <li className="news__item" key={news.id}>
        <NewsCard
          id={news.id}
          foto={news.image}
          nameNews={news.nameNews}
          category={news.category}
          date={news.date}
          comments={news.comments}
          cardPage={true}
        />
      </li>
    ));
  return (
    <section className="newsCategories__section">
      <div className="container">
        <h2 className="newsCategories__title">Categories</h2>
        <ul className="newsCategories__list">
          <li
            className={
              "newsCategories__item " +
              (activ === "all" ? "newsCategories__item--activ" : "")
            }
            onClick={() => {
              setActiv("all");
            }}
          >
            All News
          </li>
          <li
            className={
              "newsCategories__item " +
              (activ === "Company News" ? "newsCategories__item--activ" : "")
            }
            onClick={() => {
              setActiv("Company News");
            }}
          >
            Company News
          </li>
          <li
            className={
              "newsCategories__item " +
              (activ === "Innovation" ? "newsCategories__item--activ" : "")
            }
            onClick={() => {
              setActiv("Innovation");
            }}
          >
            Innovation
          </li>
          <li
            className={
              "newsCategories__item " +
              (activ === "Industry News" ? "newsCategories__item--activ" : "")
            }
            onClick={() => {
              setActiv("Industry News");
            }}
          >
            Industry News
          </li>
          <li
            className={
              "newsCategories__item " +
              (activ === "Expert Tips" ? "newsCategories__item--activ" : "")
            }
            onClick={() => {
              setActiv("Expert Tips");
            }}
          >
            Expert Tips
          </li>
          <li
            className={
              "newsCategories__item " +
              (activ === "Marketing" ? "newsCategories__item--activ" : "")
            }
            onClick={() => {
              setActiv("Marketing");
            }}
          >
            Marketing
          </li>
        </ul>
        {filteredNews.length > 0 ? (
          <>
            <ul className="news__list">{displayNews}</ul>
            <div className="wrapper__pagination">
              <ReactPaginate
                previousLabel={
                  filteredNews.length <= itemsPerPage ? null : (
                    <ArrowsLeft color="#424551" />
                  )
                }
                nextLabel={
                  filteredNews.length <= itemsPerPage ? null : (
                    <ArrowsRight color="#424551" />
                  )
                }
                breakLabel={"..."}
                pageCount={Math.ceil(filteredNews.length / itemsPerPage)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"pagination__active"}
                pageClassName={"pagination__item"}
                previousClassName={"pagination__previous"}
                nextClassName={"pagination__next"}
                breakClassName={"pagination__break"}
              />
            </div>
          </>
        ) : (
          <div className="newsCategories__zero ">
            <h2 className="newsCategories__title wrapper__pagination">
              There are no news for this category yet.
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};
