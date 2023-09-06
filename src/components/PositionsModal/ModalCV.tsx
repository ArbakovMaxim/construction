import "./Modal.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Close } from "../../image/svg/Close";
import { useEffect } from "react";
import { toast } from "react-toastify";

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
  message: Yup.string().max(150, "Must be 150 characters or less"),
  location: Yup.string()
    .oneOf(["New York", "San Francisco", "New Jersey"], "Location is required")
    .required("Location is required"),
  file: Yup.mixed().required("File is required"),
});

interface Props {
  onClose: () => void;
}

export const ModalCV = ({ onClose }: Props) => {
  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      location: "",
      file: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      toast.success("Thanks for your CV.");
      console.log(values);
      onClose();
    },
  });

  return (
    <div className="modal__backdrop">
      <div className="modal__wrapper">
        <button
          type="button"
          className="modal__btn--close"
          onClick={() => {
            onClose();
          }}
        >
          <Close />
        </button>
        <h1 className="modal__title">Send your CV</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="modal__wrapper--input">
            <label htmlFor="name" className="modal__label">
              Name*
            </label>
            <input
              className="modal__field"
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

          <div className="modal__wrapper--input">
            <label htmlFor="location" className="modal__label">
              Location*
            </label>
            <div className="select">
              <select
                id="location"
                name="location"
                className="modal__field modal__field--select"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
              >
                <option value="" disabled className="modal__option">
                  Choose your location
                </option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="New Jersey">New Jersey</option>
              </select>
            </div>
            {formik.touched.location && formik.errors.location ? (
              <div className="footerForm__error-container">
                {formik.errors.location}
              </div>
            ) : null}
          </div>

          <div className="modal__wrapper--input">
            <label className="modal__label" htmlFor="massage">
              phone*
            </label>
            <input
              className="modal__field"
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
              <div className="footerForm__error-container">
                {formik.errors.phone}
              </div>
            ) : null}
          </div>

          <div className="modal__wrapper--input">
            <label htmlFor="email" className="modal__label">
              Email*
            </label>
            <input
              className="modal__field"
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

          <div className="modal__wrapper--input">
            <label className="modal__label" htmlFor="massage">
              Сovering letter
            </label>
            <textarea
              id="massage"
              name="massage"
              placeholder="Your covering letter"
              className="footerForm__field modal__label--massage"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="footerForm__error-container">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <div className="modal__wrapper--file">
            <input
              id="file"
              name="file"
              type="file"
              placeholder="Attach your CV*"
              onChange={(event) => {
                const file =
                  event.currentTarget.files && event.currentTarget.files[0];
                const label = document.querySelector(".modal__label--file");
                if (label) {
                  if (file) {
                    formik.setFieldValue("file", file);
                    label.textContent = file.name;
                  } else {
                    label.textContent = "Attach your CV*";
                  }
                }
              }}
            />
            <label htmlFor="file" className="modal__label--file modal__label">
              Attach your CV*
            </label>
            {formik.touched.file && formik.errors.file ? (
              <div className="footerForm__error-container">
                {formik.errors.file}
              </div>
            ) : null}
          </div>

          <button className="modal__wrapper--btn" type="submit">
            send
          </button>
        </form>
      </div>
    </div>
  );
};
