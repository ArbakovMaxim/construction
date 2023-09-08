import "./ContactsOffices.css";
import "../../ui/container.css";

export const ContactsOffices = () => {
  return (
    <section className="contactsOffices__section">
      <div className="container">
        <h2 className="contactsOffices__title">Our offices</h2>
        <p className="contactsOffices__text">
          Give us a call, send us a note or visit our office. We can’t wait to
          hear from you!
        </p>
        <ul className="contacts__list">
          <li className="contacts__item">
            <h3 className="contacts__item--title">New York, USA</h3>
            <p className="constacts__item--text">
              8502 Preston Rd. Inglewood, New York 98380
            </p>
            <ul>
              <li className="constacts--item__infoBlock">
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1IiQ_TjXiV3-jt2PcUa0o9hFqZLA&hl=ru&ll=40.73853244735144%2C-73.94864082061513&z=12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="constacts__item--linkAdress"
                >
                  See on the map
                </a>
              </li>
              <li className="constacts--item__tel">
                <a
                  href="tel:(405) 555-0128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="constacts__item--link "
                >
                  Call:{" "}
                  <span className="constacts__item--text">(405) 555-0128</span>
                </a>
              </li>
              <li className="constacts--item__infoBlock">
                <a
                  href="mailto:hello@createx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="constacts__item--link"
                >
                  Email:{" "}
                  <span className="constacts__item--text">
                    hello@createx.com
                  </span>
                </a>
              </li>
            </ul>
            <p className="constacts__item--link">
              Schedule:{" "}
              <span className="constacts__item--text">
                Mon - Fri 9:00 - 18:00
              </span>
            </p>
          </li>

          <li className="contacts__item">
            <h3 className="contacts__item--title">New Jersey, USA</h3>
            <p className="constacts__item--text">
              2464 Royal Ln. Mesa, New Jersey 45463
            </p>
            <ul>
              <li className="constacts--item__infoBlock">
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1IiQ_TjXiV3-jt2PcUa0o9hFqZLA&hl=ru&ll=40.73853244735144%2C-73.94864082061513&z=12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="constacts__item--linkAdress"
                >
                  See on the map
                </a>
              </li>
              <li className="constacts--item__tel">
                <a
                  href="tel:(808) 555-0111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="constacts__item--link "
                >
                  Call:{" "}
                  <span className="constacts__item--text">(808) 555-0111</span>
                </a>
              </li>
              <li className="constacts--item__infoBlock">
                <a
                  href="mailto:hello@createx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="constacts__item--link"
                >
                  Email:{" "}
                  <span className="constacts__item--text">
                    hello@createx.com
                  </span>
                </a>
              </li>
            </ul>
            <p className="constacts__item--link">
              Schedule:{" "}
              <span className="constacts__item--text">
                Mon - Fri 9:00 - 18:00
              </span>
            </p>
          </li>

          <li className="contacts__item">
            <h3 className="contacts__item--title">San Francisco, USA</h3>
            <p className="constacts__item--text">
              8502 Preston Rd. Inglewood, San Francisco 98380
            </p>
            <ul>
              <li className="constacts--item__infoBlock">
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1IiQ_TjXiV3-jt2PcUa0o9hFqZLA&hl=ru&ll=40.73853244735144%2C-73.94864082061513&z=12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="constacts__item--linkAdress"
                >
                  See on the map
                </a>
              </li>
              <li className="constacts--item__tel">
                <a
                  href="tel:(505) 555-0125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="constacts__item--link "
                >
                  Call:{" "}
                  <span className="constacts__item--text">(505) 555-0125</span>
                </a>
              </li>
              <li className="constacts--item__infoBlock">
                <a
                  href="mailto:hello@createx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="constacts__item--link"
                >
                  Email:{" "}
                  <span className="constacts__item--text">
                    hello@createx.com
                  </span>
                </a>
              </li>
            </ul>
            <p className="constacts__item--link">
              Schedule:{" "}
              <span className="constacts__item--text">
                Mon - Fri 9:00 - 18:00
              </span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
