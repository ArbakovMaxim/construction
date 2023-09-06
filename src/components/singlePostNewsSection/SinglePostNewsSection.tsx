import "./SinglePostNewsSection.css";
import "../../ui/container.css";
import { toast } from "react-toastify";
import { Quotes } from "../../image/svg/Quotes";
import { Check } from "../../image/svg/Check";
import { Facebook } from "../../image/svg/Facebook";
import { LinkedIn } from "../../image/svg/LinkedIn";
import { Twitter } from "../../image/svg/Twitter";
import { useSelector } from "react-redux";
import { selectNewsById } from "../../redux/newsSlice";
import { ShareArrow } from "../../image/svg/ShareArrow";
import { useState } from "react";
import { SingleCommentForm } from "../singleCommentForm/SingleCommentForm";

interface Props {
  ID: string | undefined;
}

interface Comment {
  name: string;
  email: string;
  DateComent: string;
  reply: string;
  textComent: string;
}

interface NewsData {
  id: string;
  image: string;
  nameNews: string;
  category: string;
  date: string;
  comments: string;
  singleImage: string;
  textComent: Comment[];
}

export const SinglePostNewsSection = ({ ID }: Props) => {
  const [reply, setReply] = useState("");
  const newsInfo = useSelector((state) => selectNewsById(state, ID));
  if (!newsInfo) {
    return <div>{toast.error("Project not found")}</div>;
  }

  const info: NewsData = newsInfo;
  const quantityComments = Object.keys(info.textComent).length;

  return (
    <section>
      <div className="container">
        <div className="singlePostNewsSection__wraper--img">
          <img src={info.singleImage} alt="News" />
        </div>
        <div className="singlePostNewsSection__container">
          <p className="singlePostNewsSection__title">
            Vulputate vitae pellentesque scelerisque luctus consequat mattis
            pellentesque dui odio. Interdum aenean sit malesuada ornare sed
            gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit
            ac euismod.
          </p>
          <p className="singlePostNewsSection__text">
            At facilisi sapien posuere eget nunc senectus proin nullam. Tortor
            senectus in et sagittis, vitae diam cras dignissim. Varius
            adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare
            pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in
            massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra
            risus vel. <br />
            <br />
            Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci
            interdum feugiat lectus libero duis. Nisl massa, elementum varius
            sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet
            non sed duis diam vehicula rhoncus. In dictum nullam tincidunt
            semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi
            nunc, non.
          </p>
          <div className="singlePostNewsSection__wrapper--quote">
            <div className="singlePostNewsSection__wrapper--svg">
              <Quotes />
            </div>
            <p className="singlePostNewsSection__quote--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar
              eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis
              non. Congue tortor in tot euismod vulputate etiam eros. Vel
              accumsan at elit neque, ipsum.
            </p>
          </div>
          <p className="singlePostNewsSection__text">
            Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut
            erat mattis. Vitae mus blandit in neque amet non fringilla blandit:
          </p>
          <ul className="singlePostNewsSection__list">
            <li className="singlePostNewsSection__item">
              <Check />
              <span className="singlePostNewsSection__item--text">
                A fermentum in morbi pretium aliquam adipiscing donec tempus.
              </span>
            </li>
            <li className="singlePostNewsSection__item">
              <Check />
              <span className="singlePostNewsSection__item--text">
                Vulputate placerat amet pulvinar lorem nisl.
              </span>
            </li>
            <li className="singlePostNewsSection__item">
              <Check />
              <span className="singlePostNewsSection__item--text">
                Consequat feugiat habitant gravida quisque elit bibendum id
                adipiscing sed.
              </span>
            </li>
            <li className="singlePostNewsSection__item">
              <Check />
              <span className="singlePostNewsSection__item--text">
                Etiam duis lobortis in fames ultrices commodo nibh.
              </span>
            </li>
          </ul>
          <p className="singlePostNewsSection__text">
            Enim, vel massa odio diam. Blandit massa gravida feugiat elementum
            id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur
            volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur
            neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices
            fames augue mattis tortor est justo, pharetra nibh risus. Facilisi
            at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis
            sagittis curabitur tellus convallis eget netus vitae.
          </p>
          <div className="singlePostNewsSection__wrapper--socialBlock">
            <p className="singlePostNewsSection__sicialBlock--text">Share:</p>
            <ul className="singlePostNewsSection__sicialBlock--list">
              <li className="singlePostNewsSection__sicialBlock--item">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="singlePostNewsSection__social--icon"
                >
                  <Facebook color="#787A80" opacity="1" />
                </a>
              </li>
              <li className="singlePostNewsSection__sicialBlock--item">
                <a
                  href="https://www.linkedin.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="singlePostNewsSection__social--icon"
                >
                  <LinkedIn width="24" height="24" color="#787A80" />
                </a>
              </li>
              <li className="singlePostNewsSection__sicialBlock--item">
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="singlePostNewsSection__social--icon"
                >
                  <Twitter color="#787A80" opacity="1" />
                </a>
              </li>
            </ul>
          </div>
          <p className="coment__title">
            {quantityComments === 0 ? "no" : quantityComments} comments
          </p>
          <ul>
            {Object.entries(info.textComent).map(([commentKey, comment]) => (
              <li key={commentKey} className="comment__item">
                <div className="comment__info">
                  <p className="comment__name">{comment.name}</p>
                  <p className="comment__date">{comment.DateComent}</p>
                </div>
                <div className="comment__wrapper--text">
                  <p className="comment__text">
                    <span className="comment__text--reply">
                      {comment.reply === "" ? null : comment.reply}
                    </span>{" "}
                    {comment.textComent}
                  </p>
                  <button
                    className="comment__btn"
                    onClick={() => {
                      setReply(`@${comment.name}`);
                    }}
                  >
                    <ShareArrow />
                    <span className="comment__btn--span">Reply</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SingleCommentForm reply={reply} ID={ID} />
    </section>
  );
};
