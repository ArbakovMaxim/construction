import "./SingleCommentForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/newsSlice";

interface Props {
  reply: string;
  ID: string | undefined;
}

export const SingleCommentForm = ({ reply, ID }: Props) => {
  const dispatch = useDispatch();

  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(30, "Name must be at most 30 characters")
      .matches(/^[A-Za-z\s]+$/, "Name can only contain letters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .max(450, "Message must be at most 450 characters")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const comment = {
        name: values.name.trim(),
        email: values.email.trim(),
        DateComent: formattedDate,
        textComent: values.message.trim(),
      };
      dispatch(addComment({ newsId: ID, comment }));
      toast.success("Your comment has been successfully added.");
      resetForm();
    },
  });

  return (
    <section className="singleCommentForm__section">
      <div className="singleCommentForm__container ">
        <h2 className="singleCommentForm__title">Leave your comment</h2>
        <form
          className="singleCommentForm__form"
          onSubmit={formik.handleSubmit}
        >
          <div className="singleCommentForm__wrapper--infoInputs">
            <div className="singleCommentForm__wrapper--input">
              <label htmlFor="name" className="singleCommentForm__label">
                Name*
              </label>
              <input
                className="singleCommentForm__input"
                autoComplete="name"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="footerForm__error-container">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>

            <div className="singleCommentForm__wrapper--input">
              <label htmlFor="email" className="singleCommentForm__label">
                Email*
              </label>
              <input
                className="singleCommentForm__input"
                autoComplete="email"
                placeholder="Your working email"
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="footerForm__error-container">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div className="singleCommentForm__wrapper--message">
            <label className="singleCommentForm__label" htmlFor="message">
              Your comment*
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type comment here"
              className="singleCommentForm__input singleCommentForm__input--messege"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={
                reply
                  ? `${reply} ${formik.values.message}`
                  : formik.values.message
              }
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="footerForm__error-container">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <div className="singleCommentForm__wrapper--btn">
            <button className="singleCommentForm__button" type="submit">
              Post comment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
