import "./ContactsForm.css";
import "../../ui/container.css";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { CustomCheckBox } from "../../image/svg/CustomCheckBox";
import ContactsFormImg from "../../image/ConstactsForm.jpg";

const validationSchema = Yup.object({
  name: Yup.string()
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?[0-9]+$/, "Invalid phone number")
    .max(20, "Must be 20 characters or less")
    .required("Phone is required"),
  message: Yup.string()
    .max(150, "Must be 150 characters or less")
    .required("Message is required"),
  interested: Yup.string()
    .oneOf(
      ["Construction", "Project Development", "Interior Design", "Repairs"],
      "Interested is required"
    )
    .required("Interested is required"),
  location: Yup.string()
    .oneOf(["New York", "San Francisco", "New Jersey"], "Location is required")
    .required("Location is required"),
  contactOption: Yup.string().required("Contact option is required"),
});

export const ContactsForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      interested: "",
      location: "",
      contactOption: "Phone",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (isChecked) {
        toast.success(
          "Thank you. We will review your data shortly. And we will contact you in the way you choose.."
        );
        console.log(values);
        resetForm();
      } else {
        toast.warn("Please take checkBox");
      }
    },
  });

  return (
    <section className="contactsForm__section">
      <div className="container">
        <h1 className="contactsForm__title">Contact us</h1>
        <p className="contactsForm__text">
          Please complete the form. Detailed information will help us to make a
          tuned offer.
        </p>
        <div className="contactsForm__wrapper">
          <div className="contactsForm__wrapper--img">
            <img src={ContactsFormImg} alt="employee" />
          </div>
          <form onSubmit={formik.handleSubmit} className="contactsForm__form">
            <div className="contactsForm__wrapper--formBlock">
              <div>
                <div className="contactsForm__wrapper--input">
                  <label htmlFor="name" className="contactsForm__label">
                    Name*
                  </label>
                  <input
                    className="contactsForm__field"
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
                    <div className="contactsForm__error-container">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>

                <div className="contactsForm__wrapper--input">
                  <label className="contactsForm__label" htmlFor="massage">
                    phone*
                  </label>
                  <input
                    className="contactsForm__field"
                    autoComplete="phone"
                    placeholder="Your phone number"
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="contactsForm__error-container">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>

                <div className="contactsForm__wrapper--input">
                  <label htmlFor="email" className="contactsForm__label">
                    Email*
                  </label>
                  <input
                    className="contactsForm__field"
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
                    <div className="contactsForm__error-container">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <div className="contactsForm__wrapper--input">
                  <label htmlFor="interested" className="contactsForm__label">
                    I am interested in
                  </label>
                  <div className="contactsForm__select">
                    <select
                      id="interested"
                      name="interested"
                      className="contactsForm__field contactsForm__field--select"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.interested}
                    >
                      <option
                        value=""
                        disabled
                        className="contactsForm__option"
                      >
                        I am interested in
                      </option>
                      <option value="Construction">Construction</option>
                      <option value="Project Development">
                        Project Development
                      </option>
                      <option value="Interior Design">Interior Design</option>
                      <option value="Repairs">Repairs</option>
                    </select>
                  </div>
                  {formik.touched.interested && formik.errors.interested ? (
                    <div className="contactsForm__error-container">
                      {formik.errors.interested}
                    </div>
                  ) : null}
                </div>

                <div className="contactsForm__wrapper--input">
                  <label htmlFor="location" className="contactsForm__label">
                    Location*
                  </label>
                  <div className="contactsForm__select">
                    <select
                      id="location"
                      name="location"
                      className="contactsForm__field contactsForm__field--select"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.location}
                    >
                      <option
                        value=""
                        disabled
                        className="contactsForm__option"
                      >
                        Choose your location
                      </option>
                      <option value="New York">New York</option>
                      <option value="San Francisco">San Francisco</option>
                      <option value="New Jersey">New Jersey</option>
                    </select>
                  </div>
                  {formik.touched.location && formik.errors.location ? (
                    <div className="contactsForm__error-container">
                      {formik.errors.location}
                    </div>
                  ) : null}
                </div>

                <div className="">
                  <h3 className="contactsForm__label">
                    Preferred contact method
                  </h3>
                  <div className="contactsForm__wrapper--radioBlock">
                    <label>
                      <input
                        type="radio"
                        id="phoneOption"
                        name="contactOption"
                        value="Phone"
                        checked={formik.values.contactOption === "Phone"}
                        onChange={formik.handleChange}
                        className=""
                      />
                      <span className="contactsForm__rediobtn--span">
                        Phone
                      </span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="emailOption"
                        name="contactOption"
                        value="Email"
                        checked={formik.values.contactOption === "Email"}
                        onChange={formik.handleChange}
                        className="contactsForm__redio--btn"
                      />
                      <span className="contactsForm__rediobtn--span">
                        Email
                      </span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="viberOption"
                        name="contactOption"
                        value="Viber"
                        checked={formik.values.contactOption === "Viber"}
                        onChange={formik.handleChange}
                        className="contactsForm__redio--btn"
                      />
                      <span className="contactsForm__rediobtn--span">
                        Viber
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="contactsForm__wrapper--input">
              <label className="contactsForm__label" htmlFor="message">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                className="contactsForm__label--message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="contactsForm__error-container">
                  {formik.errors.message}
                </div>
              ) : null}
            </div>

            <div className="contactsForm__wrapper--chekboxBlock">
              <div className="contactsForm__chekbox--wrapper">
                <label className="contactsForm__chekbox--massege">
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
                  <span className="contactsForm__chekbox--span">
                    I agree to receive communications from <br /> Createx
                    Construction Bureau.
                  </span>
                </label>
              </div>
              <button className="contactsForm__wrapper--btn" type="submit">
                send request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
