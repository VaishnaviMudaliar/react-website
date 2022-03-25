import React, { Component } from "react";
import Field from "../common/Field";
import { withFormik } from "formik";
import * as Yup from "yup";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your Name"
      },
      {
        name: "email",
        elementName: "input",
        type: "text",
        placeholder: "Your Email"
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your Phone"
      }
    ],
    [
      {
        name: "message",
        elementName: "input",
        type: "textarea",
        placeholder: "Your Message"
      }
    ]
  ]
};

class Contact extends Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>

          <form
            id="contactForm"
            data-sb-form-api-token="API_TOKEN"
            onSubmit={this.props.handleSubmit}
          >
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group"></div>

                {fields.sections.map((section, sectionIndex) => {
                  return (
                    <div className="col-md-6" key={sectionIndex}>
                      {section.map((field, i) => {
                        return (
                          <Field
                            {...field}
                            key={i}
                            value={this.props.values[field.name]}
                            name={field.name}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                            touched={this.props.touched[field.name]}
                            errors={this.props.errors[field.name]}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center">
              <button
                className="btn btn-primary btn-xl text-uppercase disabled"
                id="submitButton"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: ""
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "your name is definitely longer than that")
      .required("You must give us your name"),
    email: Yup.string()
      .email("you need to give us a valid email")
      .required("please enterr your email"),
    phone: Yup.string()
      .min(10, "the phone number entered is less than 10 digits")
      .max(15, "the number entered needs to be around 15 digits")
      .required("please provide your phone number"),
    message: Yup.string()
      .min(500, "Please write a good message")
      .required("please drop a message for us!")
  }),

  handleSubmit: (values, { setSubmitting }) => {
    alert("you have submitted the form", JSON.stringify(values));
  }
})(Contact);
