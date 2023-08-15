import { Chat } from "../../image/svg/Chat";
import { Iphone } from "../../image/svg/Iphone";
import "./ContactBlock.css";

export const ContactBlock = () => {
  return (
    <div className="contactBlock__wrapper">
      <div className="contactBlock__wrapper--contact">
        <Iphone />
        <div className="contactBlock__wrapper--text">
          <p className="contactBlock__text">Call us</p>
          <a className="contactBlock__link" href="tel:+4055550128">
            (405) 555-0128
          </a>
        </div>
      </div>
      <div className="contactBlock__wrapper--contact">
        <Chat />
        <div className="contactBlock__wrapper--text">
          <p className="contactBlock__text">Talk to us</p>
          <a className="contactBlock__link" href="mailto:hello@createx.com">
            hello@createx.com
          </a>
        </div>
      </div>
    </div>
  );
};
