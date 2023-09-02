import "./FooterForm.css";
import "../../ui/container.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { CustomCheckBox } from "../../image/svg/CustomCheckBox";
import { toast } from "react-toastify";

export const FooterForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <section className="footerForm__section" id="footerForm">
      <div className="container footerForm__container">
        <Formik
          initialValues={{ name: "", phone: "", email: "", massage: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required")
              .matches(/^[A-Za-z]+$/, "Name must contain only letters"),
            phone: Yup.string()
              .matches(/^\+?[0-9]+$/, "Invalid phone number")
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string().email("Invalid email address"),
            massage: Yup.string()
              .max(150, "Must be 150 characters or less")
              .required("Required"),
          })}
          onSubmit={(values) => {
            if (isChecked) {
              toast.success("Your application has been successfully accepted");
              console.log(values);
            } else {
              toast.warn("Please take checkBox");
            }
          }}
        >
          <Form className="footerForm__form">
            <h2 className="footerForm__title">
              A quick way to discuss details
            </h2>
            <div className="footerForm__wrapper--input">
              <label className="footerForm__label" htmlFor="name">
                Name*
              </label>
              <Field
                autoComplete="name"
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="footerForm__field"
              />
              <div className="footerForm__error-container">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="footerForm__wrapper--input">
              <label className="footerForm__label" htmlFor="phone">
                Phone*
              </label>
              <Field
                autoComplete="phone"
                id="phone"
                name="phone"
                type="text"
                placeholder="Your phone number"
                className="footerForm__field"
              />
              <div className="footerForm__error-container">
                <ErrorMessage name="phone" />
              </div>
            </div>

            <div className="footerForm__wrapper--input">
              <label className="footerForm__label" htmlFor="email">
                Email
              </label>
              <Field
                autoComplete="email"
                id="email"
                name="email"
                type="email"
                placeholder="Your working email"
                className="footerForm__field"
              />
              <div className="footerForm__error-container">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className="footerForm__wrapper--input">
              <label className="footerForm__label" htmlFor="massage">
                Massage*
              </label>
              <Field
                as="textarea"
                id="massage"
                name="massage"
                type="text"
                placeholder="Your message"
                className="footerForm__field  footerForm__field--massage"
              />
              <div className="footerForm__error-container">
                <ErrorMessage name="massage" />
              </div>
            </div>

            <div className="footerForm__chekbox--wrapper">
              <label className="footerForm__chekbox--massege">
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={isChecked}
                  onChange={toggleCheckbox}
                  style={{ display: "none" }}
                />
                <span
                  className={`custom-checkbox ${isChecked ? "checked" : ""}`}
                >
                  {isChecked && <CustomCheckBox />}
                </span>
                <span className="footerForm__chekbox--span">
                  I agree to receive communications from Createx Construction
                  Bureau.
                </span>
              </label>
            </div>
            <button className="footerForm__button " type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};
