import "./NewsCategories.css";
import "../../ui/container.css";

export const NewsCategories = () => {
  return (
    <section className="newsCategories__section">
      <div className="container">
        <h2>Categories</h2>
        <ul className="newsCategories__list">
          <li className="newsCategories__item" onClick={() => {}}>
            All News
          </li>
          <li className="newsCategories__item" onClick={() => {}}>
            Company News
          </li>
          <li className="newsCategories__item" onClick={() => {}}>
            Innovation
          </li>
          <li className="newsCategories__item" onClick={() => {}}>
            Industry News
          </li>
          <li className="newsCategories__item" onClick={() => {}}>
            Expert Tips
          </li>
          <li className="newsCategories__item" onClick={() => {}}>
            Marketing
          </li>
        </ul>
      </div>
    </section>
  );
};
