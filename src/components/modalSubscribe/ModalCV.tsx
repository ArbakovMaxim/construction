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
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      toast.success("Thank you. Your subscription has been completed.");
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
          <button className="modal__wrapper--btn" type="submit">
            send
          </button>
        </form>
      </div>
    </div>
  );
};
