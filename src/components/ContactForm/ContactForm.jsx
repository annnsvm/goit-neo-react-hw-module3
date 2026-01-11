import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const INITIAL_VALUES = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ callbackOnSubmit }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={callbackOnSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.field}>
          <label htmlFor={nameFieldId} className={css.label}>
            Name
          </label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.field}>
          <label htmlFor={numberFieldId} className={css.label}>
            Number
          </label>
          <Field type="tel" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
