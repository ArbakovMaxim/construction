import "./AboutUsHistory.css";
import "../../ui/container.css";
import Slider from "react-slick";
import HistoryImg from "../../image/HistorySlide.jpg";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

const customDotTexts = [
  "Present",
  "March 2019",
  "November 2018",
  "July 2015",
  "August 2010",
  "February 2007",
  "May 2004",
  "October 2001",
  "June 2000",
];

export const AboutUsHistory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | null
        | undefined
    ) => (
      <div>
        <ul className="custom-dots"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="custom-dot custom-dots--itenm" key={i + 1}>
        <div className="customDots__circle"></div>
        <div className="customDots__text">{customDotTexts[i]}</div>
      </div>
    ),
  };

  return (
    <section className="aboutUsHistory__section">
      <div className="container">
        <div>
          <h2>Vertical Dots Slider</h2>
          <Slider {...settings}>
            <div className="aboutUsHistory__wrapper--slide">
              <img
                className="aboutUsHistory__slide--img"
                src={HistoryImg}
                alt="Slide 1"
              />
              <p className="aboutUsHistory__slide--text">
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae,
              </p>
            </div>
            <div className="aboutUsHistory__wrapper--slide">
              <img
                className="aboutUsHistory__slide--img"
                src={HistoryImg}
                alt="Slide 2"
              />
              <p className="aboutUsHistory__slide--text">
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae,
              </p>
            </div>
            <div className="aboutUsHistory__wrapper--slide">
              <img
                className="aboutUsHistory__slide--img"
                src={HistoryImg}
                alt="Slide 3"
              />
              <p className="aboutUsHistory__slide--text">
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae,
              </p>
            </div>
            <div className="aboutUsHistory__wrapper--slide">
              <img
                className="aboutUsHistory__slide--img"
                src={HistoryImg}
                alt="Slide 4"
              />
              <p className="aboutUsHistory__slide--text">
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae,
              </p>
            </div>
            <div className="aboutUsHistory__wrapper--slide">
              <img
                className="aboutUsHistory__slide--img"
                src={HistoryImg}
                alt="Slide 5"
              />
              <p className="aboutUsHistory__slide--text">
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae,
              </p>
            </div>
            <div className="aboutUsHistory__wrapper--slide">
              <img
                className="aboutUsHistory__slide--img"
                src={HistoryImg}
                alt="Slide 6"
              />
              <p className="aboutUsHistory__slide--text">
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae,
              </p>
            </div>
            <div className="aboutUsHistory__wrapper--slide">
              <img
                className="aboutUsHistory__slide--img"
                src={HistoryImg}
                alt="Slide 7"
              />
              <p className="aboutUsHistory__slide--text">
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae,
              </p>
            </div>
            <div className="aboutUsHistory__wrapper--slide">
              <img
                className="aboutUsHistory__slide--img"
                src={HistoryImg}
                alt="Slide 8"
              />
              <p className="aboutUsHistory__slide--text">
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae,
              </p>
            </div>
            <div className="aboutUsHistory__wrapper--slide">
              <img
                className="aboutUsHistory__slide--img"
                src={HistoryImg}
                alt="Slide 9"
              />
              <p className="aboutUsHistory__slide--text">
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae,
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
