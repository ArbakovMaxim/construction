import "../../ui/container.css";
import "./AskQuestionForm.css";

export const AskQuestionForm = () => {
  return (
    <div className="container askForm__container">
      <h2 className="askForm__title ">Want to know more? Ask us a question:</h2>
      <form className="askForm">
        <label className="askForm__label">
          <span className="askForm__label--span">Name</span>
          <input
            className="askForm__input askForm__input--nameANDPhone"
            type="text"
            placeholder="Your name"
          />
        </label>
        <label className="askForm__label">
          <span className="askForm__label--span">Phone</span>
          <input
            className="askForm__input askForm__input--nameANDPhone"
            type="phone"
            placeholder="Your phone"
          />
        </label>
        <label className="askForm__label">
          <span className="askForm__label--span">Massage</span>
          <input
            className="askForm__input askForm__input--massage"
            type="text"
            placeholder="Your message"
          />
        </label>
        <button className="askForm__button" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};
