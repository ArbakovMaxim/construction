import "../../../../ui/container.css";
import "./ContentHero.css";

export const ContentHero = () => {
  return (
    <div className="container">
      <div className="contentHero__wrapper">
        <h1 className="contentHero__title">
          CREATE<span className="contentHero__span">X</span> CONSTRUCTION
        </h1>
        <p className="contentHero__text">
          Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat,
          dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget
          pellentesque integer ipsum elementum felis.
        </p>
        <div className="contentHero__button--wrapper">
          <button className="contentHero__button">Learn more about us</button>
          <button className="contentHero__button contentHero__button--submit ">
            <a className="contentHero__button--link" href="#footerForm">
              SUBMIT REQUEST
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
