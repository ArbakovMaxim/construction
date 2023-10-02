import "../../ui/container.css";
import "./AskQuestionForm.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

export const AskQuestionForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(12, "Name must be at most 12 characters")
      .matches(/^[A-Za-z\s]+$/, "Name can only contain letters")
      .required("Name is required"),
    phone: Yup.string()
      .matches(/^\+?[0-9]+$/, "Invalid phone number")
      .min(10, "phone have minimum 10 numbers")
      .max(20, "Must be 20 numbers or less")
      .required("Required"),
    message: Yup.string()
      .max(650, "Message must be at most 650 characters")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const trimmedValues: { name: string; phone: string; message: string } = {
        name: values.name.trim(),
        phone: values.phone.trim(),
        message: values.message.trim(),
      };

      const isEmpty = Object.values(trimmedValues).some(
        (value) => value === ""
      );
      if (isEmpty) {
        toast.error("Please fill in all fields.");
      } else {
        toast.success(
          "Your application has been accepted, we will call you back"
        );
        console.log(trimmedValues);
        resetForm();
      }
    },
  });

  return (
    <div className="container askForm__container">
      <h2 className="askForm__title ">Want to know more? Ask us a question:</h2>
      <form className="askForm" onSubmit={formik.handleSubmit}>
        <div className="askForm__wrapper--label">
          <label className="askForm__label">
            <span className="askForm__label--span">Name</span>
            <input
              autoComplete="name"
              className="askForm__input askForm__input--nameANDPhone"
              type="text"
              placeholder="Your name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="askForm__error">{formik.errors.name}</div>
            ) : null}
          </label>
          <label className="askForm__label">
            <span className="askForm__label--span">Phone</span>
            <input
              autoComplete="tel"
              className="askForm__input askForm__input--nameANDPhone"
              type="tel"
              placeholder="Your phone"
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="askForm__error">{formik.errors.phone}</div>
            ) : null}
          </label>
        </div>
        <div className="askForm__wrapper--label askForm__wrapper--labelBtnGroup">
          <label className="askForm__label">
            <span className="askForm__label--span">Message</span>
            <input
              className="askForm__input askForm__input--massage"
              type="text"
              placeholder="Your message"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="askForm__error">{formik.errors.message}</div>
            ) : null}
          </label>
          <button className="askForm__button" type="submit">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};
